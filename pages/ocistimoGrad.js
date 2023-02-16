import Header from "../components/Header";
import Footer from "../components/Footer";
import NewPostModal from '../components/PostModal';
import { useEffect, useState } from "react";
import { getPostStorage } from "../services/postService";
import Card from "../components/Card";

const ocistimoGrad = () => {
  const [showNewPostBtn, setShowNewPostBtn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);

  useEffect(() => {
    const postStorage = getPostStorage();
    setPosts(postStorage);
    setFilterPosts(postStorage);
  }, []);

  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...posts];

    updatedList = updatedList.filter(item => 
      item.postStreet.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    setFilterPosts(updatedList);
  }

  return(
    <>
    <Header newPostBtn={setShowNewPostBtn}/>

    <div className="education-title">
          <h1 className="font-bold text-8xl text-[#1D7110] organic-title">OčiSTimo&nbsp;</h1>
          <h1 className="font-bold text-8xl organic-title organic-title-bottom">grad</h1>
        </div>
    <p className="education-subpage--text ocistimo-subtitle">Klikom na zelenu tipku "Nova objava", koja se nalazi dolje desno, imate mogućnost korištenja sustava. Za korištenje sustava je potrebna prijava. Stavite fotografiju smeća u gradu, te unesite ulicu kojoj je fotografija slikana i opis, a mi ćemo se pobrinuti za čišćenje!</p>
    
    <div className="ocistimo-wrapper">
      <div className="flex flex-row items-center justify-between ocistimo-wrapper-input">
        <div className="ocistimo-filter">
          <div className="odvoz--search-text">Unesite ulicu za filtriranje:&nbsp;</div>
          <input id='odvoz--search-box' placeholder="&nbsp;Ime ulice" onChange={(e) => filterBySearch(e)} />
        </div>
        <NewPostModal showBtn={showNewPostBtn} setPostArray={setPosts} postArray={posts}/>
      </div>
      <div className="card-holder">
        {filterPosts && filterPosts.map((post) => <Card post={post} setPost={setPosts} key={post.postID}/>)}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ocistimoGrad;