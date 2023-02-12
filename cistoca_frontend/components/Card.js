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
    <div>
      <p>{post.postOwner.name} {post.postOwner.lastname}</p>
      <h3>{post.postStreet}</h3>
      <p>{post.postDesc}</p>
      <Image width={300} height={300} src={post.postImgURL}></Image>
      {(currentUser && post.postOwner.name === currentUser.name && post.postOwner.lastname === currentUser.lastname) ? 
        <button onClick={() => deletePost(post.postID)}>Delete</button> : null
      }
    </div>
  )
}

export default Card;