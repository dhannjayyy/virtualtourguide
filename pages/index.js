import Hero from "../components/hero/index"
import Footer from "../components/layoutComponents/footer/Footer"
import Navbar from "../components/layoutComponents/navbar/navbar"

import Contact from "../components/contact/index"

const index = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Contact />
    <Footer />
    </>
  )
}

export default index