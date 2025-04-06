import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42'>
            <h5 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Welcome to</h5>
            <h1 className="text-4xl tracking-wide md:text-6xl md:leading-20  xl:text-8xl font-bold mb-6 text-white xl:leading-30">ADVANCED TECH COMPUTER CENTER.</h1>
            <p className="text-sm md:text-medium text-neutral-100 mb-10 w-full lg:w-3/4">
                At Advanced Tech Computer Center, we are committed to delivering high-quality IT services, professional training, and printing solutions that cater to both individuals and businesses. With our expertise in computer networking, security systems, graphic design, and document processing, we ensure that our clients receive nothing but the best. Whether you’re looking to enhance your skills through our computer training programs or need fast and reliable printing services, we are here to serve you.
            </p>
            <div className="flex-col sm:flex-row flex gap-5 sm:gap-10 w-full lg:w-1/2">
                <Link to={'/services'} className="bg-primary text-secondary-dark py-3 px-10 uppercase text-center">
                    Our Services
                </Link>
                <Link to='/contact' className="text-center bg-transparent text-white border border-white py-3 px-10 uppercase">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default Hero