import Head from 'next/head'
import Footer from '../components/footer/footer.component'
import Navbar from '../components/navbar/navbar.component'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <div className='main-container'>
      <Head>
      {/* <meta id="viewport" name="viewport" content="width=1000px"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
