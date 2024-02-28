import React from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
    return (
        <>
            <div className=" fixed top-0 left-0 w-20 h-screen flex flex-col text-2xl text-white gap-8 space-y-4  justify-center items-center bg-opacity-20">

                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors duration-200 "><FaWhatsapp /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-200 "><FaXTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-200 "><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-200 "><FaLinkedinIn /></a>
            </div>
            <div className="w-1 z-10 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 rounded ml-20"></div>
        </>
    )
}
