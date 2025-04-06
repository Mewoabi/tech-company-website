import React from 'react'

const AboutMore = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 bg-white py-10' >
            <h3 className='text-5xl text-secondary-dark text-left my-10 font-bold'>About</h3>
            <div className='flex flex-col md:flex-row justify-between items-start py-10 w-full gap-3'>
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <img src="https://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2025/04/profile-picture.jpg" alt="about-side-image" className='h-[500px] w-full object-cover' />
                </div>
                <div className='w-full md:w-1/2 lg:w-2/3'>
                    <p className='text-md lg:text-xl lg:font-bold text-secondary-dark mb-8'>
                        Welcome to Advanced Tech Computer Center, your one-stop destination for top-quality tech solutions and printing services. At A-Tech, we are dedicated to providing a wide range of professional services tailored to meet the needs of individuals and businesses alike. With years of experience in the industry, we pride ourselves on delivering reliable, efficient, and cost-effective solutions.
                    </p>
                    <p className='text-md lg:text-xl lg:font-bold text-secondary-dark mb-8'>
                        Our expertise spans across various fields, ensuring that you have access to a complete suite of services that cater to your every need. Whether you’re looking to enhance your technical skills through our computer training courses, need high-quality printing for your business or personal projects, or require professional IT support, A-Tech has got you covered.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMore