import React from 'react'
import { FaInfoCircle,  FaUserCircle} from 'react-icons/fa';
import AboutCard from './aboutCard';
import {FaCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AboutMain = () => {
    const aboutData = [
        {
            title: 'Our Mission',
            content: 'At A-Tech, our mission is to provide reliable, high-quality tech services and printing solutions to meet the diverse needs of our clients. Whether it’s offering professional computer training, maintaining IT systems, or delivering custom printing services like t-shirt printing and business cards, our goal is to empower individuals and businesses with innovative solutions that enhance their daily operations.',
            icon: FaCircleCheck,
        },
        {
            title: 'Our Process',
            content: 'At A-Tech, we follow a clear and efficient process to ensure your needs are met seamlessly. First, we consult with you to understand your requirements, whether for computer training, network setup, or printing needs like funeral programs or school ID cards. Next, we customize our services based on your goals, and then we execute with precision, ensuring timely delivery of high-quality results, from printing your business cards to installing CCTV systems or providing AMC (Annual Maintenance Contracts).',
            icon: FaInfoCircle,
        },
        {
            title: 'Contact Us',
            content: 'Whether you need a quick consultation for computer networking, have questions about our printing services, or need support for your annual maintenance contract, we’re here to help. Reach out to us via phone, email, or our website’s contact form, and our team will be ready to assist you with any inquiries about our services like web building, computer maintenance, or even passport-sized photo printing.',
            icon: FaUserCircle
        },
    ]
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 flex flex-col lg:flex-row justify-between items-center py-10 w-full lg:gap-0 gap-20'>
            {/* the left container */}
            <div className='w-full lg:w-1/2'>
                <h4 className='text-primary text-2xl font-bold mb-6'>About Us</h4>
                <h3 className='text-secondary-dark text-3xl md:text-4xl font-bold mb-6'> A satisfied customer is the best business strategy of all.</h3>
                <p className='text-shadow-secondary-dark text-medium tmb-10 w-full font-thin mb-15 lg:mb-30'>
                    At Advanced Tech Computer Center, we are committed to providing exceptional service and innovative solutions to our clients. Our dedicated team of professionals is here to ensure that you receive the best service possible, every time.
                    A-Tech is committed to becoming a trusted leader in technology services and printing solutions, making a positive impact in every service we provide.
                    Thank you for choosing A-Tech – where technology meets excellence!
                </p>
                <Link to={'/services'} className='py-3 px-10 bg-primary text-secondary-dark uppercase'>
                Our services
            </Link>
            </div>
            {/* the right container */}
            <div className='w-full lg:w-1/2 grid grid-cols-1 grid-rows-3 gap-4'>
                {aboutData.map((item, index) => (
                    <AboutCard 
                        key={index}
                        title={item.title}
                        content={item.content}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default AboutMain