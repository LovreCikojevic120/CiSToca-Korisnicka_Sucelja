import Link from "next/link";

const NotFoundPage = () => {
    return (
      <div className="w-[90%] background-404 absolute bg-[#9DEC8F] -z-10 rounded-[10px]">
        <div className="title-404">
            <h1 className="font-bold text-8xl">Stranica koju ste tražili</h1>
            <h1 className="font-bold text-8xl text-[#1D7110]">ne postoji</h1>
        </div>
        <Link  className="link-404" href='/'>Povratak na naslovnicu</Link>
        </div>
    )
}

export default NotFoundPage
