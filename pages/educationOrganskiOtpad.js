import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const educationOrganskiOtpad = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl organic-title">Organski&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110] organic-title organic-title-bottom">otpad</h1>
        </div>
    <Link  className="education-return" href='/education'>← Povratak na edukaciju</Link>
     
    <div className="education-subpage--wrapper">
        <p className="education-subpage--text">Odvojenim prikupljnjem smanjujemo volumen otpada na odlagalištima, te štedimo vodu i energiju. Odvojenim prikupljnjem smanjujemo volumen otpada na odlagalištima, te štedimo vodu i energiju. Odvojenim prikupljnjem smanjujemo volumen otpada na odlagalištima, te štedimo vodu i energiju.</p>
        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Vrste otpada</h1>
        <div className="education-subpage--bulletpoints">
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Organski otpad </p>
                <p className="education-subpage--organic">čini nešto više od jedne trećine ukupnog otpada u kanti za smeće, a sastoji se od kuhinjskih otpadaka (ostaci voća i povrća, ljuske jaja, ostaci kave i čaja, uvelo cvijeće...) otpadaka iz vrta (lišće, otpalo voće, sitno isjeckano granje, korovi, trava...) Kompostiranje je najprihvatljiviji način zbrinjavanja organskog otpada. Kompostiranjem se iz organskog otpada dobiju vrijedne humusne tvari koje služe za obnovu i poboljšanje kvalitete tla.</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Papir </p>
                <p className="education-subpage--organic">čini drugu trećinu sadržaja kanti za smeće. Recikliranjem starog papira štedi se električna energija, voda i drvo. Za proizvodnju 1 tone papira srednje kvalitete mora se posjeći dva stabla i potrošiti 240 000 l vode i 4700 kWh električne energije. Istu količinu papira može se proizvesti od starog papira uz utrošak 180 l vode i 2750 kWh električne energije.</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Plastika </p>
                <p className="education-subpage--organic">u kanti za smeće poseban je problem. Oporaba plastičnog otpada komplicirana je i otežana mnogovrsnošću plastičnih materijala. Zato je s ekološkog stajališta najodgovornije izbjegabvati korištenje plastičnih proizvoda, naročito plastične ambalaže. Plastična vrećica ili boca u prirodi se razgrađuje 100-1000 godina. Stoga plastičnu ambalažu koju ne možemo izbjeći moramo svakako odvojeno prikupljati.</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Staklo </p>
                <p className="education-subpage--organic">u kanti za otpatke vrijedna je sekundarna sirovina. Odvojenim prikupljanjem po vrstama stakla i recikliranjem štedi se sirovine i energiju. Jedna povratna staklena boca zamjenjuje 40 nepovratnih, zo znači - 40 puta manji volumen otpada!</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Metali </p>
                <p className="education-subpage--organic">se u mnogim gradovima i mjestima otkupljuju već odavno. Organiziranim odvojenim sakupljanjem bolje će se iskoristiti ove vrijedne sekundarne sirovine i spriječiti njihovo rasipanje.</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Opasni otpad </p>
                <p className="education-subpage--organic">čini samo mali dio ukupne mase otpadaka, ali predstavlja veliku opasnost za okoliš. Tu spadaju: ostaci lijekova, baterije i akumulatori, rabljeno motorno ulje, pesticidi, herbicidi, ostaci boja i lakova, elektronički otpad...</p>
            </div>
            <div className="education-subpage--organic-wrapper">
                <p className="education-subpage--organic education-subpage--organic--beginning">⪢ Ostali otpad </p>
                <p className="education-subpage--organic">čini građevinski materijal, koža, auto-gume...On se također velikim dijelom može reciklirati.</p>
            </div>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default educationOrganskiOtpad;