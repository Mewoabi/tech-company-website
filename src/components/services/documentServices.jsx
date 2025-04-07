import React from 'react'
import ServiceCard from '../servicecard';

const DocumentServices = () => {
    const services = [
        {
            title: "Photocopying",
            content:
                "Get fast and high-quality photocopying services for personal, business, and academic documents. We handle bulk and single-page copies efficiently.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/8.avif",
            path: "/services/printing-branding",
            buttonText: "Book an appointment",
        },
        {
            title: "Scanning of Documents",
            content:
                "We offer professional document scanning services to convert physical documents into digital formats. Ideal for archiving, emailing, and cloud storage.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/9.webp",
            path: "/services/technology-it",
            buttonText: "Book an appointment",
        },
        {
            title: "Laminations",
            content:
                "Protect your documents with our lamination services. We laminate certificates, ID cards, photographs, and other important papers to increase their durability.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/12.webp",
            path: "/services/document-services",
            buttonText: "Book an appointment",
        },
        {
            title: "Passport Size Photos",
            content:
                "Need a passport photo for an ID, visa, or official documents? We provide professional, high-quality passport-size photos that meet government and international standards.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-5622649.webp",
            path: "/services/photography",
            buttonText: "Book an appointment",
        },
        {
            title: "Photo Enlargements",
            content:
                "Turn your small photos into large, high-resolution prints without losing quality. Perfect for framing, decorations, and gifts.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/10.jpeg",
            path: "/services/training-register",
            buttonText: "Book an appointment",
        },
        {
            title: "Project Writing",
            content:
                "We assist students, professionals, and businesses with high-quality project writing and documentation services. Whether it’s a research paper, business proposal, or academic report, we ensure clarity, structure, and professionalism.",
            imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/11.jpeg",
            path: "/services/graphic-design",
            buttonText: "Book an appointment",
        },
    ];


    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-10 bg-gray-100'>
            <h2 className='text-3xl sm:text-5xl font-bold mb-15 text-center'>Documentation Services</h2>
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

export default DocumentServices