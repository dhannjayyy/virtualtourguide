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

function MyApp({ Component, pageProps }) {
  <Script src="https://apis.mapmyindia.com/advancedmaps/v1/5fe1b6599a8af4ad136833bd774f0cef/map_load?v=1.3" />

  return <Component {...pageProps} />
}

export default MyApp
