import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image"
import image1 from '../public/services1.jpg'
import image2 from '../public/services2.jpg'

const service = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl text-[#1D7110]">Usluge</h1>
        </div>
        
      <div className="education-subpage--wrapper">
          <p className="education-subpage--text">Sustav upravljanja kvalitetom i okolišem primijenjen u Čistoća d.o.o. Split zasnovan je na zahtjevima međunarodne norme HRN EN ISO 9001:2009, a za cilj ima potpuno ispunjavanje zahtjeva za kvalitetom procesa i usluga te skrbi o okolišu.</p>
      <div className="service-article--wrapper">
        <div className="service-article">
          <Link href="/serviceOdvoz">
            <Image src={image1} className='px-8 py-5 education-article--image'></Image>
            <h1  class="education-article--title">Raspored odvoza komunalnog otpada po blokovima</h1>
          </Link>
          <p class="education-article--text">Dokument je zbog prirode posla podložan promjenama. Ažurirani raspored se nalazi kod poslovođa Operativne službe. Sve veće promjene rasporeda biti će unesene u Dokument.</p>
          <Link  className="education-article--link" href='/serviceOdvoz'>⮞ Više</Link>
        </div>

        <div className="service-article">
          <Link href="/serviceRecycle">
            <Image src={image2} className='px-8 py-5 education-article--image'></Image>
            <h1 class="education-article--title">Reciklažno dvorište</h1>
          </Link>
          <p class="education-article--text"> obavlja se na otvorenom i zatvorenom skladišnom su propisani odredbama Pravilnika o gospodarenju otpadom. obavlja se na otvorenom i zatvorenom skladišnom su propisani odredbama Pravilnika o gospodarenju otpadom.</p>
          <Link className="education-article--link" href='/serviceRecycle'>⮞ Više</Link>
        </div>

      </div>


          <div className="education-subpage--bulletpoints">
          <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Čistoća d.o.o. Split:</h1>
              <div className="education-subpage--bulletpoints">
                  <p>⪢ provodi i razvija cjeloviti sustav gospodarenja otpadom na području svog rada</p>
                  <p>⪢ odvojeno skuplja korisni otpad u spremnicima na javno-prometnim površinama i u reciklažnim dvorištima</p>
                  <p>⪢ skuplja i odvozi komunalni otpad iz kućanstava i drugih korisnika usluga</p>
                  <p>⪢ održava čistoću javno-prometnih površina (kolnika, pločnika, trgova, pothodnika, javnih stuba i prolaza)</p>
                  <p>⪢ provodi trajnu komunikaciju s javnošću</p>
              </div>
          </div>
      </div>


    <Footer/>
    </>
  )
}

export default service;