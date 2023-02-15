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

    <div className="education-title">
          <h1 className="font-bold text-8xl text-[#1D7110] organic-title">OčiSTimo&nbsp;</h1>
          <h1 className="font-bold text-8xl organic-title organic-title-bottom">grad</h1>
        </div>
    <p className="education-subpage--text ocistimo-subtitle">Klikom na zelenu tipku "Nova objava", koja se nalazi dolje desno, imate mogućnost korištenja sustava. Za korištenje sustava je potrebna prijava. Stavite fotografiju smeća u gradu, te unesite ulicu kojoj je fotografija slikana i opis, a mi ćemo se pobrinuti za čišćenje!</p>
    
    <div className="ocistimo-wrapper">
      <NewPostModal showBtn={showNewPostBtn} setPostArray={setPosts} postArray={posts}/>
      <div className="card-holder">
        {posts && posts.map((post) => <Card post={post} setPost={setPosts} key={post.postID}/>)}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ocistimoGrad;