import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const servicePage = () => {
  return(
    <>
    <Header/>
    <div className="education-title">
          <h1 className="font-bold text-8xl text-[#1D7110]">Usluge</h1>
        </div>
        
    <div className="service-article--wrapper">
      <div className="service-article">
        <div>
          <Link href="/educationStoJeOtpad">
            <h1  class="service--text education-subpage--organic education-subpage--organic--beginning">Odlagalište otpada</h1>
          </Link>
          <p class="service--text education-subpage--organic"> je građevina namijenjena odlaganju otpada na površinu ili pod zemlju (podzemno odlagalište), uključujući:interno odlagalište otpada.</p>
        </div>
        <Link  className="service--text education-article--link" href='/educationStoJeOtpad'>🡺 Više o odlagalištu otpada</Link>
      </div>

      <div className="service-article">
        <div>
          <Link href="/educationOrganskiOtpad">
            <h1 class="service--text education-subpage--organic education-subpage--organic--beginning">Reciklažno dvorište</h1>
          </Link>
          <p class="service--text education-subpage--organic">  obavlja se na otvorenom i zatvorenom skladišnom su propisani odredbama Pravilnika o gospodarenju otpadom.</p>
        </div>
        <Link className="service--text education-article--link" href='/educationOrganskiOtpad'>🡺 Više o reciklažnom dvorištu</Link>
      </div>

    </div>


    <div className="education-subpage--wrapper">
        <p className="education-subpage--text">Sustav upravljanja kvalitetom i okolišem primijenjen u Čistoća d.o.o. Split zasnovan je na zahtjevima međunarodne norme HRN EN ISO 9001:2009, a za cilj ima potpuno ispunjavanje zahtjeva za kvalitetom procesa i usluga te skrbi o okolišu.</p>
        <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Čistoća d.o.o. Split:</h1>
        <div className="education-subpage--bulletpoints">
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

export default servicePage;