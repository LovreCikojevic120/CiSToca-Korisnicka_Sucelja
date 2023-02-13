import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const educationDjeca = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl">Edukacija&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110]">djece</h1>
        </div>
    <Link  className="education-return" href='/educationPage'>🡸 Povratak na edukaciju</Link>
    <div className="w-[95%] p-2 education-subpage-background mx-10px absolute bg-[#9DEC8F] -z-10 rounded-tr-[20%] rounded-tl-[5px] rounded-br-[20%] rounded-bl-[5px]"></div>
    
    <div className="education-subpage--wrapper">
        <p className="education-subpage--text">Jedan od najvećih problema današnjice je problem zbrinjavanja otpada, sve veće količine otpada, koje iz godine u godinu sve više rastu. Nove tehnologije koje reproduciraju nove vrste otpada. Problemi sa deponijima, zagađivanjem okoliša, troškovima održavanja, saniranja i otvaranja novih deponija toliko su narasli da je stari način ponašanja i odnosa prema otpadu jednostavno neprihvatljiv.</p>
        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Učenje klinaca</h1>
        <p>Edukacija kao vrlo važan segment cjelovitog sustava gospodarenja otpadom zaslužuje konstantnu aktivnost u svim sferama društva. Čistoća d.o.o. Split djeluje mjerama koje imaju pozitivni predznak i povećavaju efekte odvojenog sakupljanja otpada:</p><br /><br />
        <div className="education-subpage--bulletpoints">
            <p>⪢ educirajući građane preko javnih glasila</p>
            <p>⪢ suradnjom s eko-školama na svim područjima</p>
            <p>⪢ suradnjom s osnovnim školama izradom letaka s informacijama o potrebi odvojenog sakupljanja, mjestima i mogućnostima odlaganja, obavijesti o pozitivnim efektima</p>
            <p>⪢ educirajući djecu predškolske dobi i donacijom vrtićima opreme za odvojeno skupljanje otpada u obliku žaba. Oblik koji dodatno motivira djecu i olakšava posao odgajateljima i učiteljima u njihovom plemenitom zadatku</p>
            <p>⪢ educirajući građane preko javnih glasila</p>
            <p>⪢ suradnjom s eko-školama na svim područjima</p>
            <p>⪢ suradnjom s osnovnim školama izradom letaka s informacijama o potrebi odvojenog sakupljanja, mjestima i mogućnostima odlaganja, obavijesti o pozitivnim efektima</p>
            <p>⪢ educirajući djecu predškolske dobi i donacijom vrtićima opreme za odvojeno skupljanje otpada u obliku žaba. Oblik koji dodatno motivira djecu i olakšava posao odgajateljima i učiteljima u njihovom plemenitom zadatku</p>
            <p>⪢ educirajući djecu predškolske dobi i donacijom vrtićima opreme za odvojeno skupljanje otpada u obliku žaba. Oblik koji dodatno motivira djecu i olakšava posao odgajateljima i učiteljima u njihovom plemenitom zadatku</p>
        </div><br /><br />
        <p>Poznata je činjenica da navike stvorene u djetinjstvu ostaju za čitav život. Zato je iznimno važno već u najranijoj dobi djeteta stvoriti naviku da odvojeno sakupljanje postane način funkcioniranja. Organizacija sustava primarne reciklaže unutar dječjih vrtića i osnovnih škola pruža mogućnost da djeca uz pomoć odgojitelja i učitelja upoznaju potrebu i način odgovornog ponašanja prema prirodi.</p>
    </div>
    <Footer/>
    </>
  )
}

export default educationDjeca;