import Navbar from '../components/navbar/navbar.component'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <div className = 'container'>
      <Navbar/>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
