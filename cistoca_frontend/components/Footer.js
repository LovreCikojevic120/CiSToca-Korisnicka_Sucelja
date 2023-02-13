import Link from "next/link";

const Footer = () => {
  return(
    <footer className="flex flex-row justify-around footer">
      <div className="w-[90%] footer-background absolute bg-[#9DEC8F80] -z-10 rounded-[10px]"></div>
      <div className="footer-section">
        <h4 className="footer-title">Radno vrijeme</h4>
        <p className="footer-text">
        <p>Od ponedjeljka do petka</p>
          <p>7:30 - 14:30 sati</p>
          <p>na adresi Put Mostina 49, Split</p>
        </p>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">Kontakt telefon</h4>
        <p className="footer-text">
          <p>Info telefon: 0800 0021</p>

          <p>Operativna služba: 021/323-740</p>

          <p>Komercijalni sektor: 021/323-736</p>
        </p>
      </div>
      <div className="flex flex-col footer-section">
        <h4 className="footer-title">Linkovi</h4>
        <div className="footer-text">
          <Link  className="footer-link" href='/servicePage'>Usluge</Link>
          <Link  className="footer-link" href='/educationPage'>Edukacija</Link>
          <Link  className="footer-link" href='/infoPage'>Informacije</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;