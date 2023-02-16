import { getPostStorage, setPostStorage } from "../services/postService";
import { getCurrentUser } from "../services/loginService";
import Image from "next/image";
import { useState } from "react";

const Card = ({post, setPost}) => {

  const [showConfirm, setShowConfirm] = useState(false);

  const deletePost = (postId) => {
    let storage = getPostStorage();
    let updatedArray = storage.filter(post => post.postID !== postId);
    setPostStorage(updatedArray);
    setPost(updatedArray);
  }

  let currentUser = getCurrentUser();

  return(
    <div className="card-item">
      <h3 className="card-street">Ulica: {post.postStreet}</h3>
      <Image width={300} height={300} className="card-image" alt={'card-image'} src={post.postImgURL}></Image>
      <p className="pb-3 card-desc">{post.postDesc}</p>
      <p className="my-3 card-owner">Objavio: {post.postOwner}</p>
      {(currentUser && post.postOwner === currentUser.username) ? 
        <button onClick={() => setShowConfirm(true)} className='mt-3 bg-red-500 text-white active:bg-red-600 text-sm w-20 h-8 rounded shadow outline-none focus:outline-none card-button'>Izbriši</button> : null
      }
      {showConfirm ? 
        <div className="flex flex-col items-center my-2 rounded-xl pb-4 font-semibold">
          <div className="my-4">Potvrdite brisanje</div>
          <div>
            <button className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              onClick={() => deletePost(post.postID)}>Izbriši
            </button>
            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              onClick={() => setShowConfirm(false)}>Odustani
            </button>
          </div>
        </div> : null
      }
    </div>
  )
}

export default Card;