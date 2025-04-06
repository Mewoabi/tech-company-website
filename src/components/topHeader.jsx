import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/atech-logo.png'// Adjust the path as necessary

const TopHeader = () => {
    return (
        <div className="hidden lg:flex justify-between items-center py-10 px-40 text-primary border-b-[0.001rem] border-white mb-6">
            <img src={logo} alt="site-logo" className='w-[100px] h-[40px]' />
            <div className="flex-1 text-center text-medium">
                Make a call: 671541106 / 675566345
            </div>
            <div className="flex text-right text-2xl">
                <FaFacebook className="mx-2 cursor-pointer" />
                <FaTwitter className="mx-2 cursor-pointer" />
                <FaInstagram className="mx-2 cursor-pointer" />
                <FaLinkedin className="mx-2 cursor-pointer" />
            </div>
            {/* <hr className="border-t-[0.5px] border-[#ffc03d]" /> */}
        </div>
    );
};

export default TopHeader;