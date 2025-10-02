import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between gap-4 py-10 md:py-20 border-b border-[#dddddd30] w-full px-4 md:px-0'>
                <div className='md:w-2/6'>
                    <div className='flex flex-col gap-4 text-center md:text-left md:pr-15'>
                    <h2 className='text-2xl font-bold text-white'>CS — Ticket System</h2>
                    <p className='text-[#A1A1AA]'>csTicket is a widely used and trusted open source support ticketing system. Easily scale and streamline your customer service and drastically improve your customer's experience</p>
                    </div>
                </div>
                <div className='md:w-1/6 flex justify-center'>
                <div className='space-y-4 text-center md:text-left mt-4 md:mt-0'>
                    <h3 className='text-xl font-medium text-white'>Company</h3>
                    <ul className='text-[#A1A1AA] space-y-2'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Mission</a></li>
                        <li><a href="#">Contact Sales</a></li>
                    </ul>
                </div>
                </div>
                <div className='md:w-1/6 flex justify-center'>
                <div className='space-y-4 text-center md:text-left mt-4 md:mt-0'>
                    <h3 className='text-xl font-medium text-white'>Services</h3>
                    <ul className='text-[#A1A1AA] space-y-2'>
                        <li><a href="#">Products & Services</a></li>
                        <li><a href="#">Customer Stories</a></li>
                        <li><a href="#">Download Apps</a></li>
                    </ul>
                </div>
                </div>
                <div className='md:w-1/6 flex justify-center'>
                <div className='space-y-4 text-center md:text-left mt-4 md:mt-0'>
                    <h3 className='text-xl font-medium text-white'>Information</h3>
                    <ul className='text-[#A1A1AA] space-y-2'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Join Us</a></li>
                    </ul>
                </div>
                </div>
                <div className='md:w-1/6 flex justify-center'>
                <div className='space-y-4 text-center md:text-left mt-4 md:mt-0'>
                    <h3 className='text-xl font-medium text-white'>Social Links</h3>
                    <ul className='text-[#A1A1AA] space-y-3'>
                        <li ><a className='flex items-center' href="#">
                            <span className='mr-2 bg-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-black text-sm'><FaXTwitter /></span>
                            @CS — Ticket System</a></li>
                        <li><a className='flex items-center' href="#">
                            <span className='mr-2 bg-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-black text-sm'><FaLinkedinIn /></span>@CS — Ticket System</a></li>
                        <li><a className='flex items-center' href="#">
                            <span className='mr-2 bg-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-black text-sm'><FaFacebookF /></span>@CS — Ticket System</a></li>
                        <li><a className='flex items-center' href="#">
                            <span className='mr-2 bg-white rounded-full flex justify-center items-center w-[20px] h-[20px] text-black text-sm'><BsEnvelopeFill /></span>support@cst.com</a></li>
                    </ul>
                </div>
                </div>

            </div>
        <div className=' py-6'>
            <div className='container mx-auto text-center'>
                <p className='text-white'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;