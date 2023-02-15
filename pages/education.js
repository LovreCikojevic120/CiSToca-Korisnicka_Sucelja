import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image"
import image1 from '../public/education1.jpg'
import image2 from '../public/education2.jpg'
import image3 from '../public/education3.jpg'

const education = () => {
  return(
    <>
    <Header/>
    <h1 className="font-bold text-8xl text-[#1D7110] education-title">Edukacija</h1>

    <div className="education-article--wrapper">

      <div className="education-article">
        <Link href="/educationStoJeOtpad">
          <Image src={image1} className='px-8 py-5 education-article--image'></Image>
          <h1  class="education-article--title">Što je otpad?</h1>
        </Link>
        <p class="education-article--text">Odlagališta pretrpana smećem postala su nažalost naša svakodnevica i veliki problem. No, to ne mora biti naša sudbina. Razumnim postupanjem s otpadom, najveći dio bačenih ostataka (s)tvari može se preraditi i pretvoriti u nove vrijedne i korisne tvari.</p>
        <Link  className="education-article--link" href='/educationStoJeOtpad'>→ Više</Link>
      </div>

      <div className="education-article">
        <Link href="/educationOrganskiOtpad">
          <Image src={image2} className='px-8 py-5 education-article--image'></Image>
          <h1 class="education-article--title">Organski otpad - smeće ili korisno dobro?</h1>
        </Link>
        <p class="education-article--text">Kada bismo sve otpatke u našoj posudi za smeće razvrstali i odvojeno složili, ustanovili bismo da organski otpad čini čak oko 30% ukupnog otpada u kućanstvu. U organski otpad ubrajamo sav biorazgradivi otpad, npr. ostatke voća i povrća, ljuske jaja, talog kave, ostatke čaja...</p>
        <Link className="education-article--link" href='/educationOrganskiOtpad'>→ Više</Link>
      </div>

      <div className="education-article">
        <Link href="/educationDjeca">
          <Image src={image3} className='px-8 py-5 education-article--image'></Image>
          <h1 class="education-article--title">Edukacija djece</h1>
        </Link>
        <p class="education-article--text">Jedan od najvećih problema današnjice je problem zbrinjavanja otpada, sve veće količine otpada, koje iz godine u godinu sve više rastu. Nove tehnologije koje reproduciraju nove vrste otpada. Problemi sa deponijima, zagađivanjem okoliša, troškovima održavanja, saniranja...</p>
        <Link className="education-article--link" href='/educationDjeca'>→ Više</Link>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default education;