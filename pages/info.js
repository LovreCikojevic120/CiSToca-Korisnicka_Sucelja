import Header from "../components/Header";
import Footer from "../components/Footer";

const info = () => {
  return(
    <>
    <Header/>
    
    <div className="education-title">
      <h1 className="font-bold text-8xl text-[#1D7110]">Informacije</h1>
    </div>

    <div className="info-wrapper">

      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Ured direktora</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Tajnica </p>
          <p className="info-text">⪢ Ana Anić</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Telefon </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Fax </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
      </div>
    
      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Pravni i kadrovski sektor</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Tajnica </p>
          <p className="info-text">⪢ Ana Anić</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Telefon </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">E-mail </p>
          <p className="info-text">⪢ cis@to.ca</p>
        </div>
      </div>
    
      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Računovodstveni sektor</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Tajnica </p>
          <p className="info-text">⪢ Ana Anić</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Telefon </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Fax </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
      </div>
    
      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Servisna radionica</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Tajnica </p>
          <p className="info-text">⪢ Ana Anić</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Telefon </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Fax </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
      </div>
    
      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Deponij</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Tajnica </p>
          <p className="info-text">⪢ Ana Anić</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Telefon </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Fax </p>
          <p className="info-text">⪢ 123-456</p>
        </div>
      </div>
    
      <div className="education-subpage--bulletpoints">
      <h1 className="font-bold text-8xl text-[#1D7110] education-subpage--subtitle">Adresa i reklamacije</h1>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Adresa </p>
          <p className="info-text">⪢ Put Mostina 49, 21000 Split</p>
        </div>
        <div className="info-text-wrapper">
          <p className="info-text info-text-first">Reklamacije </p>
          <p className="info-text">⪢ putem telefona na broj 021/123-456 ili putem pismenih pritužbi preko fax-a 021/123-456</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default info;