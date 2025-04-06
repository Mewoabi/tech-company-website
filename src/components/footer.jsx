import React from 'react';
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaLinkedin

} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-white py-10">
            <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start pt-15">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">Advance Tech <br /> computer center</h2>
                    <p className="mb-8">Get Started with us today for the best designs and output.</p>
                    <p>Mon - Sat 8:00 - 17:30,<br />Sunday - CLOSED</p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
                    <ul className="space-y-1">
                        <Link to={'/services'}>Printing & Branding</Link>
                        <Link to={'/services'}>Technology & IT Services</Link>
                        <Link to={'/services'}>Document Services</Link>
                        <Link to={'/services'}>Photography Services</Link>
                        <Link to={'/register'}>Register</Link>
                    </ul>
                </div>

                {/* Contact Button */}
                <div className="flex justify-start md:justify-center">
                    <Link
                        to={'/contact'}
                        className="bg-primary text-black font-semibold py-3 px-8 lg-px-10 hover:bg-primary-dark transition w-fit"
                    >
                        CONTACT US
                    </Link>
                </div>

                {/* Image */}
                <div>
                    <img
                        src="https://advancedtechcomputercenter.site/wp-content/uploads/2025/04/pexels-photo-1181467-1-768x513.webp"
                        alt="Programming team"
                        className="w-1/2 md:w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42">
                <p className="text-sm mb-4 md:mb-0">Copyright © 2025 https://advancedtechcomputercenter</p>
                <div className="flex space-x-4 text-primary text-2xl">
                    {/* <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
          <FaTwitter className="hover:text-primary cursor-pointer" />
          <FaInstagram className="hover:text-primary cursor-pointer" />
          <FaLinkedinIn className="hover:text-primary cursor-pointer" /> */}
                    <FaFacebookSquare className="hover:text-yellow-500 cursor-pointer" />
                    <FaTwitterSquare className="hover:text-yellow-500 cursor-pointer" />
                    <FaInstagramSquare className="hover:text-yellow-500 cursor-pointer" />
                    <FaLinkedin className="hover:text-yellow-500 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
