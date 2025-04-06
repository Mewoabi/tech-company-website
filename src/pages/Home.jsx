import AssuranceAndBestPractices from '../components/home/assuranceBestPract'
import HomeGallery from '../components/home/gallery'
import Hero from '../components/home/hero'
import HomeInnovatioin from '../components/home/innovation'
import HomeServices from '../components/home/services'
import Summary from '../components/home/summary'
import Navbar from '../components/Navbar'
import TopHeader from '../components/topHeader'
import Testimonials from '../components/home/testimonial'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'

function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Fixed Background Image */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: "url('/src/assets/cover.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            {/* Color Overlay */}
            <div className="fixed inset-0 z-0" style={{ backgroundColor: 'rgba(29, 57, 81, 0.8)' }}></div>

            {/* Scrollable Content */}
            <div className="relative z-10 min-h-screen">
                <TopHeader />

                {/* <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42'> */}
                <Navbar />
                <div>

                    <Hero />
                    {/* Add more content to demonstrate scrolling */}
                    <div className="mt-60 space-y-8 bg-white">
                        <Summary style={'h-[1200px] sm:h-[950px] md:h-[600px] lg:h-[500px]'} />
                        <HomeServices />
                        <AssuranceAndBestPractices />
                        <HomeInnovatioin />
                        <HomeGallery />
                        <Testimonials />
                        <ContactUs />
                    </div>

                </div>
                <Footer />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home
