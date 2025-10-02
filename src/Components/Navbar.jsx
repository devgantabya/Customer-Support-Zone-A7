import React from 'react';
import { GrAdd } from "react-icons/gr";

const Navbar = () => {
    return (
        <header className='shadow-sm bg-white'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center py-4 space-y-3 md:space-y-0'>
            <h1 className='text-2xl font-bold text-[#130B2D] text-center md:text-left'>CS — Ticket System</h1>
            <nav className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                <ul className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-3 md:gap-6 py-4 md:py-0'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded'>
                    <GrAdd /> New Ticket
                </button>
            </nav>
        </div>
        </header>
    );
};

export default Navbar;