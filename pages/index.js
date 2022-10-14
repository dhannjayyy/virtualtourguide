import Hero from "../components/hero/index"
import Footer from "../components/layoutComponents/footer/Footer"
import Navbar from "../components/layoutComponents/navbar/navbar"
import Locations from "../components/locations/locations"

const index = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Locations />
    <Footer />
    </>
  )
}

export default index