import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import config from "../config.json";
import axios from "axios";

export default function About() {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const handleAbout = async () => {
            const URL = config.URL;
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${URL}/api/about`, {
                    headers: {
                        "access-token": token,
                    },
                });

                setDescription(response.data.about[0].description);
                const imageData = arrayBufferToBase64(response.data.about[0].image.data.data);
                setImage(`data:image/jpeg;base64,${imageData}`);
            } catch (error) {
                console.log(error);
            }
        };
        handleAbout();
    }, []);

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    return (
        <div className='bg-slate-800 h-auto px-20 mt-20'>
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
                <Slide direction="left">
                    <div className="flex-1 flex justify-center md:justify-start">
                        {image && <img src={image} alt="img" width="900" height="auto" className='rounded-lg ' />}
                    </div>
                </Slide>
                <Fade direction="right">
                    <div className="flex-1 mr-9">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 hover:text-green-500 cursor-pointer">About Me</h2>
                        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                    </div>
                </Fade>
            </div>
            <section id='experience'>
                <hr className="mt-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section>
        </div>
    );
}
