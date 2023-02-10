import Header from "../components/Header";
import Footer from "../components/Footer";
import NewPostModal from '../components/PostModal';
import { useState } from "react";
import Image from "next/image";
import { getCurrentUser } from "../services/loginService";
import { getPosts } from "../services/postService";

const ocistimoGradPage = () => {
  const [showNewPostBtn, setShowNewPostBtn] = useState(false);
  const [posts, setPosts] = useState([]);
  const storagePosts = getPosts();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  return(
    <>
    <Header newPostBtn={setShowNewPostBtn}/>
    <h1>OcistimoGrad</h1>
    <NewPostModal showBtn={showNewPostBtn} setPostArray={setPosts} postArray={posts}/>
    {posts && posts.map((post)=>{
      return(
        <>
        <p>{post.postOwner.name} {post.postOwner.lastname}</p>
        <h3>{post.postStreet}</h3>
        <p>{post.postDesc}</p>
        <Image width={300} height={300} src={post.postImgURL}></Image>
        {(post.postOwner.name === currentUser.name && post.postOwner.lastName === currentUser.lastname) ? 
          <button>Delete</button> : null
        }
        </>
      )
    })}
    {storagePosts && storagePosts.map((post) => {
    return(
      <>
      <p>{post.postOwner.name} {post.postOwner.lastname}</p>
      <h3>{post.postStreet}</h3>
      <p>{post.postDesc}</p>
      <Image width={300} height={300} src={post.postImgURL}></Image>
      {(post.postOwner.name === currentUser.name && post.postOwner.lastName === currentUser.lastname) ? 
        <button>Delete</button> : null
      }
      </>
    )}
    )}
    <Footer/>
    </>
  )
}

export default ocistimoGradPage;