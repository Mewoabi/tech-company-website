import CardLayout from "../components/cardLayout"
import Navbar from "../components/Navbar"
import TopHeader from "../components/topHeader"
import Footer from "../components/footer"
import DetailsWithMap from "../components/contact/detailsWithMap"
import ContactForm from "../components/contact/contactForm"

function Contact() {
  return (
    <div>
      <CardLayout
        backgroundImage={'https://universalvorldtv.com/wp-content/uploads/2024/12/contact_us_5a6756504e.png'}
        overlayColor={'#33333388'}
      >
        <div>
          <TopHeader />
          <Navbar />
          <div className="flex justify-center items-center py-20">
            <h1 className="text-neutral-100 text-6xl xl:text-9xl font-bold">Contact Us</h1>
          </div>
        </div>
      </CardLayout>
      <DetailsWithMap />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact

