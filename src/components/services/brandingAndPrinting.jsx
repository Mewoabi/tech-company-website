import React from 'react'
import ServiceCard from '../servicecard';

const BrandingAndPrintingGroup = () => {
    const services = [
        {
            title: "T-shirt Printing",
            content:
                "We provide customized T-shirt printing services for businesses, schools, and events. Whether you need bulk printing or a single design, we use high-quality materials and printing techniques to bring your designs to life.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-2294342.jpeg",
            path: "/services/printing-branding",
            buttonText: "Book an appointment",
        },
        {
            title: "Business Cards",
            content:
                "Make a lasting impression with professionally designed business cards. We offer custom design, glossy/matte finishes, and premium paper options to suit your business needs.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/2.webp",
            path: "/services/technology-it",
            buttonText: "Book an appointment",
        },
        {
            title: "Color Printing",
            content:
                "Need high-quality prints? Our color printing service delivers sharp, vibrant, and professional-quality prints for flyers, brochures, posters, and more.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/3.webp",
            path: "/services/document-services",
            buttonText: "Book an appointment",
        },
        {
            title: "School ID Cards",
            content:
                "We design and print durable and professional ID cards for schools, companies, and organizations. Our ID cards include laminated, plastic, and RFID-enabled options for security and convenience.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/7.webp",
            path: "/services/photography",
            buttonText: "Book an appointment",
        },
        {
            title: "Book an appointment",
            content:
                "Our large-scale printing services cater to businesses, schools, and events. We provide billboard printing, banners, posters, and marketing materials to enhance your brand visibility.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/5.webp",
            path: "/services/training-register",
            buttonText: "Book an appointment",
        },
        {
            title: "Invitation Cards",
            content:
                "Make your special occasion unforgettable with beautifully designed invitation cards. We provide custom templates for weddings, birthdays, corporate events, and more.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/5.jpeg",
            path: "/services/graphic-design",
            buttonText: "Book an appointment",
        },
    ];


    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-10 bg-gray-100'>
            <h2 className='text-3xl sm:text-5xl font-bold mb-15 text-center'>Printing & Branding Services</h2>
            <div className="w-full grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 p-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        content={service.content}
                        // Add imageUrl if you have images:
                        imageUrl={service.imageUrl}
                        path={service.path}
                        buttonText={service.buttonText}
                        styles={'w-[300px] m-auto sm:w-[450px] md:w-[300px] lg:w-[430px] xl:w-[350px] bg-gray-100'}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandingAndPrintingGroup