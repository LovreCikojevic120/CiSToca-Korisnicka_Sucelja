import '../styles/globals.css'
import '../styles/frontPage.css'
import '../styles/cleanCity.css'
import '../styles/headerStyle.css'
import '../styles/footer.css'
import '../styles/404.css'
import '../styles/education.css'
import '../styles/educationSubpage.css'
import '../styles/service.css'
import '../styles/info.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
        <title>ČiSToća</title>
      </Head>
     <Component {...pageProps} /></>
  )
}
