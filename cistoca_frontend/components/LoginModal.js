import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({name:null, lastname:null});

  const handleLogin = (e) => {
    setShowModal(false);
    console.log(userData)
    // after logging set data to null
  }

  const handleCancel = () => {
    setShowModal(false);
    setUserData({name:null, lastname:null});
  }

  return (
    <>
      <button
        className="bg-[#1D7110] text-white active:bg-[#1D7110] text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Prijavi se
      </button>
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
                  <h3 className="text-3xl font-semibold">
                    Unesite podatke za prijavu
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <input placeholder="Ime" className="mb-4 w-2/3" onChange={(e) => setUserData({name: e.target.value, lastname:userData.lastname})}></input>
                  <input placeholder="Prezime" className="w-2/3" onChange={(e) => setUserData({name: userData.name, lastname:e.target.value})}></input>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleLogin}
                  >
                    Prijava
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCancel}
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