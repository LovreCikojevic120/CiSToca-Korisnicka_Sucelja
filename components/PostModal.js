import { useEffect, useState } from "react";
import Image from "next/image";
import { getCurrentUser } from "../services/loginService";
import { getPostStorage, setPostStorage } from "../services/postService";

export default function PostModal({showBtn, postArray, setPostArray}) {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [newPost, setNewPost] = useState({
    postID: postArray.length, 
    postStreet: null, 
    postDesc: null, 
    postImgURL: null,
    postOwner: null
  });

  const updatePostStorage = () => {
    let oldPostArray = getPostStorage();
    
    setPostStorage([...oldPostArray, newPost]);
  }

  useEffect(() => {
    setNewPost(newPost => ({...newPost, postOwner: getCurrentUser()}));

    if(showModal) document.body.style.overflow = "hidden";
  }, [showModal]);

  const MakePost = () => {
    if(Object.values(newPost).some(value => value===null ? true : false)){
      handleError();
      return;
    }

    setPostArray(postArray => [...postArray, newPost]);
    updatePostStorage();
    setShowModal(false);
    document.body.style.overflow = 'visible';
    updatePost('postID', getPostStorage().length);
    updatePost('postOwner', getCurrentUser());
    updatePost('postImgURL', null);
  }

  const updatePost = (propName, newValue) => {
    setNewPost(newPost => ({...newPost, [propName]: newValue}));
  }

  const updatePostImage = (imgFile) => {
    const reader = new FileReader();
    reader.onload = (e) => updatePost('postImgURL', e.target.result);
    reader.readAsDataURL(imgFile);
  }

  const handleError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }

  return (
    <>
      {showBtn ? 
      <div className="flex justify-end my-9 mr-10">
        <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
          Nova objava
        </button>
      </div> : 
      <div className="flex flex-col items-end my-9 mr-10 relative">
        <button
        className="bg-gray-400 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleError}>
          Nova objava
        </button>
        {showError ? <div className="font-thin text-s text-red-600 mt-1 absolute right-1 top-11">Potrebna je prijava!</div> : null}
      </div>}
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold ocistimo-modal--title">
                    Unesite podatke za objavu:
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <input placeholder=" Ulica" className="w-2/3 ocistimo-modal--input" onChange={(e) => updatePost('postStreet', e.target.value)}></input>
                  <input placeholder=" Opis objave" className="mt-4 w-2/3 ocistimo-modal--input" onChange={(e) => updatePost('postDesc', e.target.value)}></input>
                  <input type="file" className="ocistimo-modal--input-file" accept="image/jpeg, image/png, image/jpg" onChange={(e) => updatePostImage(e.target.files[0])}></input>
                  {newPost.postImgURL ? <Image src={newPost.postImgURL} width={300} height={300} className='self-center h-auto'></Image> : null}
                  {showError ? <div className="font-thin text-xs text-red-600 mt-4">Molimo popunite sva polja!</div> : null}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={ MakePost }
                  >
                    Objavi
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      document.body.style.overflow = 'visible';
                    }}
                  >
                    Odustani
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}