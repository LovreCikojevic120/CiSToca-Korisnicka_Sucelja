import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ImArrowLeft2 } from "react-icons/im";

const serviceRecycle = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl recycle-title">Reciklažno&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110] recycle-title"> dvorište</h1>
        </div>
    <Link  className="education-return" href='/service'><ImArrowLeft2/> Povratak na usluge</Link>
    
    <div className="education-subpage--wrapper">
        <p className="education-subpage--text service--text service--text-bold">Reciklažno dvorište Karepovac </p>
        <p className="education-subpage--text service--text">na lokaciji </p>
        <p className="education-subpage--text service--text service--text-bold">Dračevac 122, Split </p>
        <p className="education-subpage--text service--text">upisano je u očevidnik reciklažnih dvorišta pod rednim brojem REC-52 te njim upravlja Čistoća d.o.o. Split. Gospodarenje otpadom u ovom reciklažnom dvorištu obavlja se na otvorenom i zatvorenom skladišnom prostoru te udovoljava svim uvjetima koji su propisani odredbama Pravilnika o gospodarenju otpadom. Čistoća d.o.o. Split raspolaže s još sedam mobilnih reciklažnih dvorišta koja se, na traženje Gradskih kotara i Mjesnih odbora, raspoređuju na lokacije u gradu Splitu.</p>

        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Radno vrijeme reciklažnog dvorišta Karepovac:</h1>
        <div className="education-subpage--bulletpoints">
            <p>⪢ Ponedjeljak: od 8 do 18 sati</p>
            <p>⪢ Utorak: od 8 do 18 sati</p>
            <p>⪢ Srijeda: od 8 do 16 sati</p>
            <p>⪢ Četvrtak: od 8 do 16 sati</p>
            <p>⪢ Petak: od 9 do 18 sati</p>
            <p>⪢ Subota: od 8 do 12 sati</p>
            <p>⪢ Nedjelja: od 9 do 12 sati</p>
            <p>⪢ Blagdani: ne radimo</p>
        </div>


        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Popis otpada koji se može odložiti u reciklažnom dvorištu Karepovac:</h1>
        <div className="education-subpage--bulletpoints">
            <p>⪢ papir i karton</p>
            <p>⪢ plastična ambalaža</p>
            <p>⪢ metalna ambalaža</p>
            <p>⪢ stakleni ambalažni otpad</p>
            <p>⪢ otpadni tekstil</p>
            <p>⪢ krupni otpad</p>
            <p>⪢ jestiva ulja i masti</p>
            <p>⪢ stari lijekovi</p>
            <p>⪢ stare baterije i akumulatori</p>
            <p>⪢ električna i elektronička oprema</p>
            <p>⪢ otpadni tiskarski toneri</p>
            <p>⪢ otpadne gume</p>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default serviceRecycle;