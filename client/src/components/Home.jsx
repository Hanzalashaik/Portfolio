import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import home from "../assets/svgbg.svg";

export default function Home() {
    return (
        <>
            <section id="home">
                <div className="flex flex-col bg-slate-800 md:flex-row justify-center items-center px-2 gap-10 min-h-screen">
                    <div className="flex-1 ml-10 flex flex-col items-center md:items-start text-center md:text-left">
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Hi, I am,</h5>
                        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                            <TypeAnimation
                                sequence={[
                                    'Hanzala Shaikh',
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ display: 'inline' }}
                            />
                        </h1>
                        <h2 className="text-3xl text-gray-800 dark:text-white mt-2">I build things for the web</h2>
                        <p className="text-md text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-xl">
                            I am a full-stack web developer with a passion for creating engaging, responsive, and user-friendly web applications.
                        </p>
                        <a href={`${process.env.PUBLIC_URL}/Hanzala_resume.pdf`} download="Hanzala_Resume">
                            <button className="mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                                Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src={home} alt="Home" style={{ width: '300px', height: '350px' }} />
                    </div>
                </div>
            </section>
            <section id='about'>
                <hr className="mx-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section>
        </>
    );
}
