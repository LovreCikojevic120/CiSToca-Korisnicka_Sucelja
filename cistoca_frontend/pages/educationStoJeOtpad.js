import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const educationStoJeOtpad = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl">Što je&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110]">otpad?</h1>
        </div>
    <Link  className="education-return" href='/educationPage'>🡸 Povratak na edukaciju</Link>
    <div className="w-[95%] p-2 education-subpage-background mx-10px absolute bg-[#9DEC8F] -z-10 rounded-tr-[20%] rounded-tl-[5px] rounded-br-[20%] rounded-bl-[5px]"></div>
    
    <div className="education-subpage--wrapper">
        <p className="education-subpage--text">Odlagališta pretrpana smećem postala su nažalost naša svakodnevica i veliki problem. No, to ne mora biti naša sudbina. Razumnim postupanjem s otpadom, najveći dio bačenih ostataka (s)tvari može se preraditi i pretvoriti u nove vrijedne i korisne tvari. Bezuvjetna pretpostavka za takvo civilizirano postupanje s otpadom jest odvojeno sakupljanje. Odvajanjem po vrstama otpada već u kućanstvu postiže se bolja kvaliteta sekundarnih sirovina i lakša prerada.</p>
        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Kako izbjeći stvaranje otpada?</h1>
        <div className="education-subpage--bulletpoints">
            <p>⪢ Ako imate vrt, organski otpad (zeleni otpad iz vrta i kuhinje) ne bacajte u kantu, nego ga kompostirajte.</p>
            <p>⪢ Namirnice kupujte po mogućnosti svježe i bez ambalaže.</p>
            <p>⪢ Koristite platnenu vrećicu, košaru ili mrežu, a ponuđenu plastičnu vrećicu ljubazno odbijte.</p>
            <p>⪢ Napitke (mineralnu vodu, sokove, osvježavajuća pića, pivo, vino....) ku kupujte u povratnoj staklenoj ambalaži.</p>
            <p>⪢ Izbjegavajte proizvode zapakirane u malim obrocima. Njihova ambalaža (metalna, plastična) koju bacamo često je vrijednija od samog proizvoda</p>
            <p>⪢ Ne služite se niti u iznimnim prilikama (rođendani, zabave) plastičnim priborom za jelo, posuđem i čašama za jednokratnu uporabu.</p>
            <p>⪢ Koristite baterije (pisaljke, upaljače...) koji se mogu ponovno puniti.</p>
            <p>⪢ Koristite platnene maramice i ubruse. Ako kupujete papirnate, birajte proizvode od recikliranog papira. To vrijedi i za sve ostale papirnate proizvode.</p>
            <p>⪢ Izbjegavajte kupovanje jeftinih (plastičnih) proizvoda, posebno igračaka, jer ih zbog kratkog vijeka trajanja s pravom možemo smatrati lijepo zapakiranim smećem.</p>
            <p>⪢ Nastojte kupovati proizvode dužeg vijeka trajanja kao i one koje u slučaju kvara ne morate baciti nego popraviti.</p>
            <p>⪢ Rabljenoj odjeći i obući nije mjesto u kanti za smeće. Raspitajte se kod Crvenog križa, Caritasa ili drugih ustanova koje skrbe o potrebitima preuzimaju li rabljenu odjeću i obuću.</p>
            <p>⪢ Rabljene, dobro očuvane predmete ustupite ili prodajte (besplatnim oglašavanjem).</p>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default educationStoJeOtpad;