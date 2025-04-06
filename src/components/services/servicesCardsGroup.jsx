import React from 'react'
import ServiceCard from '../servicecard';

const ServicesCardsGroup = () => {
  const services = [
    {
      title: "Printing & Branding",
      content:
        "We offer high-resolution printing services including banners, flyers, business cards, and brochures. Our branding services help your business stand out with professional identity creation, logo design, and packaging solutions tailored to your target audience.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/printing-branding",
      buttonText: "Learn More",
    },
    {
      title: "Technology & IT Services",
      content:
        "From computer repairs and maintenance to software installation and networking, our IT professionals are equipped to handle all your tech-related needs. We also provide consulting for small businesses to ensure their systems are secure, efficient, and up-to-date.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/technology-it",
      buttonText: "Explore",
    },
    {
      title: "Document Services",
      content:
        "We specialize in academic and professional document typing, formatting, binding, and photocopying. Whether it's reports, theses, resumes, or forms, we ensure accuracy, clarity, and high presentation quality every time.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/document-services",
      buttonText: "Check It Out",
    },
    {
      title: "Photography Services",
      content:
        "Our team captures high-quality images for events, portraits, and product shoots. We offer photo editing, studio sessions, and digital delivery for individuals and businesses who need professional visual content with fast turnaround time.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/photography",
      buttonText: "View Gallery",
    },
    {
      title: "Training & Registration",
      content:
        "Enroll in our hands-on computer training programs ranging from basic digital literacy to advanced software use. We also assist with online registrations for national exams, job applications, and government services.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/training-register",
      buttonText: "Register Now",
    },
    {
      title: "Graphic Design",
      content:
        "Our creative design team produces custom graphics for social media, advertising, and corporate use. Whether you need a fresh logo, engaging visuals, or branding materials, we deliver visually appealing designs that align with your goals.",
      imageUrl: "http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1595392.webp",
      path: "/services/graphic-design",
      buttonText: "See Designs",
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