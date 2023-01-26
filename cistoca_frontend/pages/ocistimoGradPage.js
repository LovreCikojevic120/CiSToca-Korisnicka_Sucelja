import Header from "../components/Header";
import Footer from "../components/Footer";
import NewPostModal from '../components/PostModal';
import { useState } from "react";

const ocistimoGradPage = () => {
  const [showNewPostBtn, setShowNewPostBtn] = useState(false);

  return(
    <>
    <Header newPostBtn={setShowNewPostBtn}/>
    <h1>OcistimoGrad</h1>
    <NewPostModal showBtn={showNewPostBtn}/>
    <Footer/>
    </>
  )
}

export default ocistimoGradPage;