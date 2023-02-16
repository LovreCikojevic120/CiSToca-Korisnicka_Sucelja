import { useState } from "react";
import { findUser, setCurrentUser } from "../services/loginService";
import LogoutModal from "./LogoutModal";

export default function LoginModal({ userInfo, setUserInfo}) {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formInput, setFormInput] = useState(null);

  const handleLogin = () => {
    let user = findUser(formInput);
    if(!user){
      setShowError(true);
      setTimeout(()=>setShowError(false), 3000);
      return;
    }

    setShowModal(false);

    setCurrentUser(formInput);
    setUserInfo(formInput);
    document.body.style.overflow = 'visible';
  }

  const handleLogout = () => {
    setUserInfo(() => null);
    setCurrentUser(null);
    setShowConfirm(false);
  }

  return (
    <>
      {userInfo ? 
      <div className="self-center mr-2">
        <div>
            <div className="login-modal--users-name">
              <p>Korisnik</p>
              <div className="login-modal--users-name-name">{userInfo.username}</div>
            </div>
            <button
            className="bg-red-500 text-white active:bg-red-500 text-sm w-20 h-8 rounded shadow outline-none focus:outline-none mr-2"
            type="button"
            onClick={() => setShowConfirm(true)}>
              Odjava
            </button>
        </div>
        {showConfirm ? 
          <LogoutModal setConfirm={setShowConfirm} handler={handleLogout}/> : null
        }
      </div> : 
      <div className="self-center mr-2">
        <button
        className="bg-[#1D7110] text-white active:bg-[#1D7110] text-sm w-20 h-8 rounded shadow outline-none focus:outline-none mr-2"
        type="button"
        onClick={() => {
          setShowModal(true);
          document.body.style.overflow = "hidden";
          }}>
          Prijavi se
        </button>
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
                  <h3 className="text-3xl font-semibold modal--title">
                    Unesite podatke za prijavu
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <input placeholder="Korisničko ime" className="w-2/3 border-2 border-black rounded-lg p-1 modal--input" onChange={(e) => setFormInput(userInfo => ({...userInfo, username: e.target.value}))}></input>
                  <input placeholder="Lozinka" type='password' className="mt-4 w-2/3 border-2 border-black rounded-lg p-1 modal--input" onChange={(e) => setFormInput(userInfo => ({...userInfo, password:e.target.value}))}></input>
                  {showError ? <div className="font-thin text-s text-red-600 mt-4">Pogrešno korisničko ime ili lozinka</div> : null}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleLogin}>
                    Prijava
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      document.body.style.overflow = 'visible';
                    }}>
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