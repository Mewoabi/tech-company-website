import CardLayout from "../components/cardLayout"
import Navbar from "../components/Navbar"
import BrandingAndPrintingGroup from "../components/services/brandingAndPrinting"
import DocumentServices from "../components/services/documentServices"
import ServicesCardsGroup from "../components/services/servicesCardsGroup"
import TechAndIt from "../components/services/techAndIt"
import TopHeader from "../components/topHeader"
import NotSure from "../components/services/Notsure"
import Footer from "../components/footer"

function Services() {
  return (
    <div>
      <CardLayout
        backgroundImage={'https://www.techreviewer.com/virt/tech-setup/how-to-connect-ethernet-cables-using-network-switches-and-couplers/1200x480-tp-link-tl-sg108-8-port-desktop-switch_445462984bcbbddfbff3563b2b65b588.jpg/how-to-connect-ethernet-cables-using-network-switches-and-couplers.jpg'}
        overlayColor={'#464e61cc'}
      >
        <div>
          <TopHeader />
          <Navbar />
          <div className="flex justify-center items-center py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42">
            <h1 className="text-neutral-100 text-6xl xl:text-9xl font-bold">Services</h1>
          </div>
        </div>
      </CardLayout>
      <TechAndIt />
      <ServicesCardsGroup />
      <BrandingAndPrintingGroup />
      <DocumentServices />
      <NotSure />
      <Footer />
    </div>
  )
}

export default Services
