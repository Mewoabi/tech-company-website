import React from 'react'
import ServiceCard from '../servicecard';

const ServicesCardsGroup = () => {
  const services = [
    {
      title: "Computer Training",
      content:
        "We offer hands-on computer training programs to help individuals and businesses learn essential IT skills. Whether you are a beginner or an advanced user, our training covers Microsoft Office, programming, networking, graphic design, and more.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/printing-branding",
      buttonText: "Book an appointment",
    },
    {
      title: "Computer Maintenance",
      content:
        "Keep your computer systems running smoothly and efficiently with our maintenance services. We provide hardware and software troubleshooting, virus removal, system upgrades, and general repairs to extend the life of your devices.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-6754846.webp",
      path: "/services/technology-it",
      buttonText: "Book an appointment",
    },
    {
      title: "Computer Networking",
      content:
        "We design and install secure and reliable networks for businesses, schools, and individuals. Our services include LAN/WAN setup, Wi-Fi installation, router configuration, and network security solutions to keep your data safe.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/1.webp",
      path: "/services/document-services",
      buttonText: "Book an appointment",
    },
    {
      title: "CCTV Installation",
      content:
        "Enhance the security of your home or business with our CCTV surveillance system installation. We provide high-quality cameras, remote monitoring setups, and expert guidance to ensure maximum protection.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-6257537.webp",
      path: "/services/photography",
      buttonText: "Book an appointment",
    },
    {
      title: "Data Analysis",
      content:
        "We provide professional data analysis services to help businesses make informed decisions. Our experts use Excel, SPSS, Python, and other tools to analyze and interpret your data for better strategic planning.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-792199-1.webp",
      path: "/services/training-register",
      buttonText: "Book an appointment",
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      content:
        "Our AMC service ensures ongoing support for businesses by providing regular system maintenance, troubleshooting, and IT support to prevent downtime and ensure smooth operations.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1714208.webp",
      path: "/services/graphic-design",
      buttonText: "Book an appointment",
    },
  ];


  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 p-20 bg-gray-100'>
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

export default ServicesCardsGroup