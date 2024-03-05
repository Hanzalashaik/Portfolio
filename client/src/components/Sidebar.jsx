import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import axios from "axios"
import config from "../config.json"

export default function Sidebar() {

    const [whatsappnumber, setWhatsappNumber] = useState('');
    const [twiterlink, setTwitterLink] = useState('');
    const [instagramlink, setInstagramLink] = useState('');
    const [githublink, setGithubLink] = useState('');
    const [linkedinlink, setlinkedinLink] = useState('');

    useEffect(() => {
        const handleSocialMedia = async () => {
            const URL = config.URL;
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${URL}/api/socialmedia`, {
                    headers: {
                        "access-token": token,
                    },
                });
                // console.log(response.data);
                setWhatsappNumber(response.data.socialMedia[0].whatsappnumber);
                setInstagramLink(response.data.socialMedia[0].instagramlink);
                setGithubLink(response.data.socialMedia[0].instagramlink);
                setTwitterLink(response.data.socialMedia[0].twiterlink);
                setlinkedinLink(response.data.socialMedia[0].linkedinlink);

            } catch (error) {
                console.log(error);
            }
        }
        handleSocialMedia();
    }, [])
    return (
        <>
            <div className="bg-slate-1000 fixed top-0 left-0 w-20 h-screen flex flex-col text-2xl text-white gap-5 space-y-4  justify-center items-center bg-opacity-20">

                <a href={`https://api.whatsapp.com/send?phone=${whatsappnumber}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-green-600 transition-colors duration-200 "><FaWhatsapp /></a>
                <a href={twiterlink} target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-black transition-colors duration-200 "><FaXTwitter /></a>
                <a href={instagramlink} target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-pink-600 transition-colors duration-200 "><FaInstagram /></a>
                <a href={githublink} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-colors duration-200 "><FaGithub /></a>
                <a href={linkedinlink} target="_blank" rel="noopener noreferrer" className="hover:scale-110    text-blue-700 transition-colors duration-200 "><FaLinkedinIn /></a>
            </div>
            <div className="w-1 z-10 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 rounded ml-20"></div>
        </>
    )
}
