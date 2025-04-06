import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../servicecard'

const HomeServices = () => {

    const services = [
        {
            title: 'Computer Training',
            content: 'Our training covers basic and advanced skills, including Microsoft Office, graphic design, programming, networking, and cybersecurity.',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp'
        },
        {
            title: 'CCTV Installation',
            content: 'We offer installation, configuration, and maintenance of wired and wireless security cameras, ensuring 24/7 monitoring for your safety.',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-6257537.webp'
        },
        {
            title: 'Computer Maintenance',
            content: 'Our services include software updates, hardware repairs, virus removal, system optimization, and troubleshooting to keep your computers in top condition.',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-6754846.webp'
        },
        {
            title: 'T-Shirt Printing',
            content: 'Get high-quality custom T-shirt printing for events, businesses, and personal use. We offer screen printing, heat transfer, and embroidery services to bring your designs to life.',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-2294342.jpeg'
        },
        {
            title: 'Web Development',
            content: 'From personal blogs to e-commerce platforms, we create responsive and user-friendly websites tailored to your needs',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1181467.webp'
        },
        {
            title: 'Passport Size Photos',
            content: 'Get instant passport-size photos for visa applications, ID cards, and official documents. Our photos meet international passport requirements',
            imageUrl: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-5622649.webp', 
            // path: 'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp',
            // buttonText: 'Learn More'
        },
    ]


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header with quote */}
                <div className='flex flex-col md:flex-row items-start md:items-center mb-10 justify-between'>
                    <div className="mb-8 w-full md:w-1/2">
                        <p className="text-xl md:text-2xl font-bold text-secondary-dark mb-4">
                            The best way to find yourself is to lose yourself in the service of others.
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark">Quality Services</h2>
                    </div>
                    <div className="text-center">
                        <Link to={'/services'}  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary-dark  transition-colors duration-300 cursor-pointer hover:text-primary">
                            VIEW ALL →
                        </Link>
                    </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            content={service.content}
                            // Add imageUrl if you have images:
                            imageUrl={service.imageUrl}
                            path={service.path}
                            buttonText={service.buttonText}
                            styles={'shadow-md bg-white'}
                        />
                    ))}
                </div>

                {/* View all button */}
                {/* <div className="text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                        VIEW ALL →
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default HomeServices