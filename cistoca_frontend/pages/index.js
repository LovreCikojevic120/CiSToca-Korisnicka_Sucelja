import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from "next/image"
import yellowImage from '../public/yellowBox.png'
import blueImage from '../public/blueBox.png'
import greenImage from '../public/greenBox.png'
import redImage from '../public/redBox.png'
import trashCan from '../public/Group 4.svg'
import trashCan2 from '../public/Group 1.svg'
import trashCan3 from '../public/Group 2.svg'
import historyImg1 from '../public/history1.png'
import historyImg2 from '../public/history2.png'

export default function HomePage() {
  return (
    <>
      <Header/>
      <h1>ČiSToća Split</h1>
      <p>Obavljamo komunalnu djelatnost održavanja čistoće i odlaganja komunalnog otpada.</p>
      <section className="mt-24">
        <div className="bg-yellow-200 mx-72 flex flex-row">
          <Image src={yellowImage}></Image>
          <p>
          Provodimo i razvijamo cjeloviti sustav gospodarenja otpadom na području svog rada
          </p>
        </div>

        <div className="bg-blue-500 mx-72 flex flex-row-reverse">
          <Image src={blueImage}></Image>
          <p>
          Odvojeno skupljamo korisni otpad u spremnicima na javno-prometnim površinama i u reciklažnim dvorištima
          </p>
        </div>

        <div className="bg-green-400 mx-72 flex flex-row">
          <Image src={greenImage}></Image>
          <p>
          Skupljamo i odvozimo komunalni otpad iz kućanstava i drugih korisnika usluga
          </p>
        </div>

        <div className="bg-red-500 mx-72 flex flex-row-reverse">
          <Image src={redImage}></Image>
          <p>
          Održavamo čistoću javno-prometnih površina (kolnika, pločnika, trgova, pothodnika, javnih stuba i prolaza)
          </p>
        </div>
      </section>
      <section className=" my-24">
        <Image src={trashCan} className='h-80 -ml-24'></Image>
        <Image src={trashCan2} className='h-80'></Image>
        <Image src={trashCan3} className='h-80 '></Image>
      </section>
      <section className="bg-green-600">
        <h1>Kratka povijest Čistoće</h1>
        <div>
          <p>
          Današnja ČISTOĆA d.o.o. Split osnovana je odlukom ranijeg Narodnog odbora Općine Split, 
          rješenjem od 10. veljače 1945.godine. U to vrijeme nastala je ustanova pod nazivom "Javna čistoća" 
          koja je u trenutku osnivanja zapošljavala 2 do 3 radnika koji su radili na čišćenju grada.
          </p>
          <Image src={historyImg1}></Image>
        </div>
        <div>
          <p>   
          U godini 1957. "Gradska čistoća" zapošljava veći broj radnika i uz konjsku zapregu 
          kojom se obavlja odvoz kućnog smeća proširuje svoju djelatnost na održavanje gradskih 
          uličnih slivnika, te čišćenje septičkih jama, uz postojeće djelatnosti čišćenja javno 
          prometnih površina, odvoz kućnog smeća te pružanja usluga i održavanje javnih nužnika. 
          Zabilježeno je da se 24.prosinca 1964. godine deponij sa dotadašnje lokacije na Gripama 
          seli na Karepovac.
          </p>
        </div>
        <div>
          <p>
          Godine 1965. uvode se prva nova specijalna vozila "smećari" na TAM-ovim šasijama, 
          što je u tom vremenu predstavljalo nemjerljiv tehnološki pomak i olakšavalo obavljanje 
          djelatnosti. Iste godine započela je izgradnja Doma radnika koji je otvoren 1966. godine 
          na lokaciji na kojoj se danas nalazi Upravna zgrada Društva.
          </p>
          <Image src={historyImg2}></Image>
        </div>
      </section>
      <Footer/>
    </>
  )
}
