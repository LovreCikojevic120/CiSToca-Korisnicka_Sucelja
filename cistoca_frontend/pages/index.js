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
      <section className="mt-14 flex flex-col relative">
        <div className="flex flex-row ml-72">
          <h1 className="font-bold text-8xl">ČiSToća&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110]">Split</h1>
        </div>
        <div className="w-8/12 h-96 absolute top-5 bg-[#9DEC8F] -z-10 rounded-r-[100px]"></div>
        <p className="text-3xl ml-72 w-1/3 mt-10 leading-9">Obavljamo komunalnu djelatnost održavanja čistoće i odlaganja komunalnog otpada.</p>
      </section>

      <section className="mt-24 text-start relative">
        <div className="w-4/5 h-96 absolute bg-[#9DEC8F] -z-10 rounded-tr-[100px] rounded-bl-[100px]"></div>
        <div className="w-4/5 h-96 absolute top-96 right-0 bg-[#9DEC8F] -z-10 rounded-tr-[100px] rounded-bl-[100px]"></div>
        <div className="bg-yellow-200 mx-72 flex flex-row rounded-3xl items-center">
          <Image src={yellowImage} className='px-8 py-5'></Image>
          <p className="">
            Provodimo i razvijamo cjeloviti sustav gospodarenja otpadom na području svog rada
          </p>
        </div>

        <div className="bg-blue-500 mx-72 flex flex-row-reverse rounded-3xl items-center">
          <Image src={blueImage} className='px-8 py-5'></Image>
          <p>
          Odvojeno skupljamo korisni otpad u spremnicima na javno-prometnim površinama i u reciklažnim dvorištima
          </p>
        </div>

        <div className="bg-green-400 mx-72 flex flex-row rounded-3xl items-center">
          <Image src={greenImage} className='px-8 py-5'></Image>
          <p>
          Skupljamo i odvozimo komunalni otpad iz kućanstava i drugih korisnika usluga
          </p>
        </div>

        <div className="bg-red-500 mx-72 flex flex-row-reverse rounded-3xl items-center">
          <Image src={redImage} className='px-8 py-5'></Image>
          <p>
          Održavamo čistoću javno-prometnih površina (kolnika, pločnika, trgova, pothodnika, javnih stuba i prolaza)
          </p>
        </div>
      </section>

      <section className="my-24">
        <div>
          <Image src={trashCan} className='h-80'></Image>
          <Image src={trashCan2} className='h-80 absolute right-0'></Image>
          <Image src={trashCan3} className='h-80 mt-80'></Image>
        </div>
      </section>
      <section className="bg-green-600 mx-24">
        <h1>Kratka povijest Čistoće</h1>
        <div>
          <p>
          Današnja ČISTOĆA d.o.o. Split osnovana je odlukom ranijeg Narodnog odbora Općine Split, 
          rješenjem od 10. veljače 1945.godine. U to vrijeme nastala je ustanova pod nazivom "Javna čistoća" 
          koja je u trenutku osnivanja zapošljavala 2 do 3 radnika koji su radili na čišćenju grada.
          </p>
          <Image src={historyImg1} className='w-auto'></Image>
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
          <Image src={historyImg2} className='w-auto'></Image>
        </div>
      </section>
      <Footer/>
    </>
  )
}
