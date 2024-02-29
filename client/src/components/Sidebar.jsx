import React from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Sidebar() {
    return (
        <>
            <div className="bg-slate-1000 fixed top-0 left-0 w-20 h-screen flex flex-col text-2xl text-white gap-5 space-y-4  justify-center items-center bg-opacity-20">

                <a href="https://api.whatsapp.com/send?phone=916304439802" target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-green-600 transition-colors duration-200 "><FaWhatsapp /></a>
                <a href="https://twitter.com/ShaikHanzala2" target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-black transition-colors duration-200 "><FaXTwitter /></a>
                <a href="https://www.instagram.com/hanzala.jsx" target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-pink-600 transition-colors duration-200 "><FaInstagram /></a>
                <a href="https://github.com/Hanzalashaik" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-colors duration-200 "><FaGithub /></a>
                <a href="linkedin.com/in/-hanzala-shaikh-" target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-blue-700 transition-colors duration-200 "><FaLinkedinIn /></a>
            </div>
            <div className="w-1 z-10 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 rounded ml-20"></div>
        </>
    )
}