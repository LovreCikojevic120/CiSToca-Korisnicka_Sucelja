import Link from "next/link";

const Footer = () => {
  return(
    <footer className="flex flex-row justify-around">
      <div>
        <h4>Radno vrijeme</h4>
        <p>
          Od ponedjeljka do petka<br/>
          7:30 - 14:30 sati<br/>
          (odmor 10:00 - 10:30 sati)<br/>
          na adresi Put Mostina 49, Split
        </p>
      </div>
      <div>
        <h4>Kontakt telefon</h4>
        <p>
          Info telefon: 0800 0021<br/>

          Operativna služba: 021/323-740<br/>

          Komercijalni sektor: 021/323-736
        </p>
      </div>
      <div className="flex flex-col">
        <h4>Linkovi</h4>
        <Link href='/'>Usluge</Link>
        <Link href='/'>Edukacija</Link>
        <Link href='/'>Informacije</Link>
      </div>
    </footer>
  )
}

export default Footer;