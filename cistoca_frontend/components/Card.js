import { getPostStorage, setPostStorage } from "../services/postService";
import { getCurrentUser } from "../services/loginService";
import Image from "next/image";

const Card = ({post, setPost}) => {

  const deletePost = (postId) => {
    let storage = getPostStorage();
    let updatedArray = storage.filter(post => post.postID !== postId);
    setPostStorage(updatedArray);
    setPost(updatedArray);
  }

  let currentUser = getCurrentUser();

  return(
    <div className="card-item">
      <p className="pb-3">{post.postDesc}</p>
      <Image width={300} height={300} alt={'card-image'} src={post.postImgURL}></Image>
      <p className="my-3">Objavio: {post.postOwner.name} {post.postOwner.lastname}</p>
      <h3>Ulica: {post.postStreet}</h3>
      {(currentUser && post.postOwner.name === currentUser.name && post.postOwner.lastname === currentUser.lastname) ? 
        <button onClick={() => deletePost(post.postID)} className='mt-3 bg-red-500 text-white active:bg-red-600 text-sm w-20 h-8 rounded shadow outline-none focus:outline-none self-center'>Delete</button> : null
      }
    </div>
  )
}

export default Card;