import '../styles/globals.css';
import '../components/layoutComponents/footer/footer.scss'
import '../styles/globals.css'
import '../components/hero/style.scss'
import '../components/contact/contact.scss'
import '../components/sites/sites.scss'
import Script from 'next/script'
import '../components/layoutComponents/navbar/navbar.scss'
import '../components/locations/locations.scss'
import '../components/locations/locationCard/LocationCard.scss'
import '../components/Map/Map.scss'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
