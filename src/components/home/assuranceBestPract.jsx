import React from 'react'
import CardLayout from '../cardLayout'
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const AssuranceAndBestPractices = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center w-full px-0.5 pb-4'>
            {/* <AssAndBestPractCard bg={'bg-secondary-light'}/>
        <AssAndBestPractCard bg={'bg-primary'}/> */}
            <CardLayout
                backgroundImage={'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1181467.webp'}
                overlayColor={'#152a3dcf'}
                className={'w-full md:w-1/2 py-8 md:py-15 px-10 md:px-20 xl:px-40 text-neutral-100 h-[400px] md:h-[500px]'}
            >
                <h4 className='text-2xl text-primary font-bold mb-4'>Quality Assurance</h4>
                <h3 className='text-3xl lg:text-4xl text-neutral-100 font-bold  md:leading-10 mb-5'>Don’t deliver a product, deliver an experience.</h3>
                <p className='mb-10'>At Advanced Tech Computer Center, we bring technology and innovation together to serve you better. Let’s work together to achieve excellence! 🚀</p>
                <Link to={'/contact'} className=" text-secondary-dark px-10 py-3 bg-primary">GET IN TOUCH</Link>
            </CardLayout>
            <CardLayout
                backgroundImage={'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1181467.webp'}
                overlayColor={'#ffc03dcf'}
                className={'w-full md:w-1/2 py-8 md:py-15 px-10 md:px-20 xl:px-40 text-secondary-dark h-[400px] md:h-[500px]'}
            >
                <h4 className='text-2xl text-secondary-dark font-bold mb-4'>We follow best practices</h4>
                <h3 className='text-lg text-secondary-dark font-thin mb-5'>We embrace modern technology and creative solutions.</h3>
                <ul>
                    <li className="flex items-center text-xl text-secondary-dark mb-2">
                        <FaCheckCircle className="mr-2" /> Quality Assurance
                    </li>
                    <li className="flex items-center text-xl text-secondary-dark mb-2">
                        <FaCheckCircle className="mr-2" /> Project On Time
                    </li>
                    <li className="flex items-center text-xl text-secondary-dark mb-2">
                        <FaCheckCircle className="mr-2" /> Modern Technology
                    </li>
                    <li className="flex items-center text-xl text-secondary-dark mb-2">
                        <FaCheckCircle className="mr-2" /> Customer Satisfaction
                    </li>
                </ul>
            </CardLayout>
        </div>
    )
}

export default AssuranceAndBestPractices