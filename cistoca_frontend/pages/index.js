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
      <section className="mt-14 flex flex-col relative page-section-1">
        <div className="flex flex-row page-title">
          <h1 className="font-bold text-8xl">ČiSToća&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110]">Split</h1>
        </div>
        <div className="w-8/12 h-96 absolute top-5 bg-[#9DEC8F] -z-10 rounded-r-[100px]"></div>
        <p className="text-3xl w-1/3 mt-10 leading-9 page-subtitle">Obavljamo komunalnu djelatnost održavanja čistoće i odlaganja komunalnog otpada.</p>
      </section>

      <section className="mt-24 text-start relative height-1000">
        <div className="w-4/5 h-96 absolute bg-[#9DEC8F] -z-10 rounded-tr-[100px] rounded-bl-[100px]"></div>
        <div className="w-4/5 h-96 absolute top-96 right-0 bg-[#9DEC8F] -z-10 rounded-tr-[100px] rounded-bl-[70px]"></div>
        
        <div className="bg-[#f7fa6190] rounded-3xl items-center frontpage-card">
          <Image src={yellowImage} alt='info-image' className='px-8 py-5 frontpage-card-image'></Image>
          <p className="info-card">
            Provodimo i razvijamo cjeloviti sustav gospodarenja otpadom na području svog grada
          </p>
        </div>

        <div className="bg-[#0247f790] rounded-3xl items-center frontpage-card">
          <Image src={blueImage} alt='info-image' className='px-8 py-5 frontpage-card-image'></Image>
          <p className="info-card">
          Odvojeno skupljamo korisni otpad u spremnicima na javno-prometnim površinama i u reciklažnim dvorištima
          </p>
        </div>

        <div className="bg-[#05BD2D90] rounded-3xl items-center frontpage-card">
          <Image src={greenImage} alt='info-image' className='px-8 py-5 frontpage-card-image'></Image>
          <p className="info-card">
          Skupljamo i odvozimo komunalni otpad iz kućanstava i drugih korisnika usluga
          </p>
        </div>

        <div className="bg-[#871a1a99] rounded-3xl items-center frontpage-card">
          <Image src={redImage} alt='info-image' className='px-8 py-5 frontpage-card-image'></Image>
          <p className="info-card">
          Održavamo čistoću javno-prometnih površina (kolnika, pločnika, trgova, pothodnika, javnih stuba i prolaza)
          </p>
        </div>
      </section>

      <section className="my-24">
      <div className="w-4/5 trashcan-background absolute right-0 bg-[#9DEC8F] -z-10 rounded-tr-[50%] rounded-tl-[5px] rounded-bl-[50%]"></div>
        <div className="trashcan-wrapper">
          <Image src={trashCan} alt='info-image' className='h-80 mb-[-100px] mt-50px trashcan-image'></Image>
          <Image src={trashCan2} alt='info-image' className='h-80 trashcan-image'></Image>
          <Image src={trashCan3} alt='info-image' className='h-80  mt-[200px] mb-50px trashcan-image'></Image>
        </div>
      </section>

      <section className="history">
        <div className="w-[90%] p-2 history-background mx-10px absolute bg-[#9DEC8F] -z-10 rounded-tr-[20%] rounded-tl-[5px] rounded-br-[5px] rounded-bl-[15%]"></div>
        <div className="history-title">
          <h1 className="font-bold text-8xl">Kratka povijest&nbsp;</h1>
          <h1 className="font-bold text-8xl text-[#1D7110]">Čistoće</h1>
        </div>
        <div className="history--section">
          <p className="history--section-text">
          Današnja ČISTOĆA d.o.o. Split osnovana je odlukom ranijeg Narodnog odbora Općine Split, 
          rješenjem od 10. veljače 1945.godine. U to vrijeme nastala je ustanova pod nazivom "Javna čistoća" 
          koja je u trenutku osnivanja zapošljavala 2 do 3 radnika koji su radili na čišćenju grada. U godini 1957. "Gradska čistoća" zapošljava veći broj radnika i uz konjsku zapregu 
          kojom se obavlja odvoz kućnog smeća proširuje svoju djelatnost na održavanje gradskih 
          uličnih slivnika. 
          </p>
          <Image src={historyImg1} alt='history-image' className='w-auto history-image'></Image>
        </div>
        <div className="history--section">
          <Image src={historyImg2} alt='history-image' className='w-auto history-image'></Image>
          <p className="history--section-text">
          Zabilježeno je da se 24.prosinca 1964. godine deponij sa dotadašnje lokacije na Gripama 
          seli na Karepovac. Godine 1965. uvode se prva nova specijalna vozila "smećari" na TAM-ovim šasijama, 
          što je u tom vremenu predstavljalo nemjerljiv tehnološki pomak i olakšavalo obavljanje 
          djelatnosti. Iste godine započela je izgradnja Doma radnika koji je otvoren 1966. godine 
          na lokaciji na kojoj se danas nalazi Upravna zgrada Društva.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}
