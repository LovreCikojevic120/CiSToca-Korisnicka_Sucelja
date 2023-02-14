import Header from "../components/Header";
import Footer from "../components/Footer";
import NewPostModal from '../components/PostModal';
import { useEffect, useState } from "react";
import { getPostStorage } from "../services/postService";
import Card from "../components/Card";

const ocistimoGrad = () => {
  const [showNewPostBtn, setShowNewPostBtn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postStorage = getPostStorage();
    setPosts(postStorage);
  }, []);

  return(
    <>
    <Header newPostBtn={setShowNewPostBtn}/>
    <NewPostModal showBtn={showNewPostBtn} setPostArray={setPosts} postArray={posts}/>
    <div className="card-holder">
      {posts && posts.map((post) => <Card post={post} setPost={setPosts}/>)}
    </div>
    <Footer/>
    </>
  )
}

export default ocistimoGrad;