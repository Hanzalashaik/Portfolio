import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import about from "../assets/bg.jpg";

export default function About() {
    return (
        <>

            <div className='bg-slate-800 h-auto px-20 mt-20'>
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">

                    <Slide direction="left">
                        <div className="flex-1 flex justify-center md:justify-start">
                            <img src={about} alt="img" className='rounded-lg w-3/5' />
                        </div>
                    </Slide>

                    <Fade direction="right">
                        <div className="flex-1 mr-9">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 hover:text-green-500 cursor-pointer">About Me</h2>
                            <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                                Hello! I'm Hanzala Shaikh, a passionate full-stack web developer with a focus on crafting high-quality and innovative web applications. With a foundation in both front-end and back-end technologies.
                            </p>
                            <p className="text-md text-gray-600 dark:text-gray-400">
                                My journey in computer science has allowed me to develop a deep understanding of web development best practices, and I'm always excited to explore new technologies and methodologies. Whether working on individual projects or collaborating with teams, I aim to contribute meaningful and impactful solutions.
                            </p>
                        </div>
                    </Fade>
                </div>
                <section id='experience'>
                    <hr className="mt-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
                </section>
            </div>
        </>
    );
}