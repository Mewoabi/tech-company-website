import React from 'react'
import CardLayout from '../cardLayout'
import { useNavigate } from 'react-router-dom';

const NotSure = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col md:flex-row justify-center items-center w-full px-0.5'>
            {/* <AssAndBestPractCard bg={'bg-secondary-light'}/>
        <AssAndBestPractCard bg={'bg-primary'}/> */}
            <CardLayout
                backgroundImage={'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1181467.webp'}
                overlayColor={'#ffc03d'}
                className={'w-full md:w-1/2 py-8 md:py-15 px-10 md:px-20 xl:px-30 h-[400px] md:h-[500px]'}
            >
                <h3 className='text-3xl lg:text-5xl  md:leading-10 lg:leading-13 text-secondary-dark font-bold mb-5'>Not Sure What You Need?​</h3>
                <p className='mb-10 text-md lg:text-lg'>Not Sure What You Need?​
                Simply give us a call and book an appointment for yourself. We are here to help.<strong> Let’s work together to achieve your goals!</strong> 🚀. we combine <strong>technology, creativity, and professionalism</strong>  deliver <strong>top-quality services</strong> for businesses and individuals</p>
                <button  onClick={() => window.location.href = 'https://wa.me/237651337209/'} className=" text-primary px-10 py-3 bg-white">BOOK AN APPOINTMENT</button>
            </CardLayout>
            <CardLayout
                backgroundImage={'http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/pexels-photo-1181467.webp'}
                // overlayColor={'#ffc03dcf'}
                className={'w-full md:w-1/2 py-8 md:py-15 px-10 md:px-20 xl:px-40 text-neutral-100 md:h-[500px]rk h-[500px]'}
            >
           
            </CardLayout>
        </div>
    )
}

export default NotSure