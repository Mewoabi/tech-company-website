import CardLayout from "../components/cardLayout"
import Navbar from "../components/Navbar"
import TopHeader from "../components/topHeader"
import Footer from "../components/footer"
import AboutMain from "../components/about/aboutMain"
import AboutMore from "../components/about/aboutMore"
import AboutIncludes from "../components/about/aboutIncludes"
import AboutBook from "../components/about/aboutBook"

function About() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://advancedtechcomputercenter.site/wp-content/uploads/2025/04/pexels-photo-792199-1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Color Overlay */}
      <div className="fixed inset-0 z-0" style={{ backgroundColor: '#eeeeee77' }}></div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">
        <div>
          <CardLayout
            backgroundImage={'https://peopleofcolorintech.com/wp-content/uploads/2021/09/lagos-techie-IgUR1iX0mqM-unsplash-1080x635.jpg'}
            overlayColor={'#1d3951cc'}
          >
            <div>
              <TopHeader />
              <Navbar />
              <div className="flex justify-center items-center py-20">
                <h1 className="text-neutral-100 text-4xl md:text-6xl xl:text-9xl font-bold">About Us</h1>
              </div>
            </div>
          </CardLayout>
          <AboutMain />
          <AboutMore />
          <AboutIncludes />
          <AboutBook />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About

