import Header from "../components/Header";
import Footer from "../components/Footer";


const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <div className="w-[90%] background-404 absolute bg-[#9DEC8F] -z-10 rounded-[10px]">
                <div className="title-404">
                    <h1 className="font-bold text-8xl">Stranica koju ste tražili</h1>
                    <h1 className="font-bold text-8xl text-[#1D7110]">ne postoji</h1>
                </div>
            </div>
            {/* <Footer/> */}
       </>
    )
}

export default NotFoundPage
