import React from 'react';
import projects from "../projects.js";

export default function Projects() {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full p-5 bg-slate-800'>
                <h1 className='mb-8 text-3xl font-semibold text-white'>Projects</h1>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4'>
                    {projects.map((project, index) => (
                        <div key={index} className='flex flex-col bg-blue-900 border items-center rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer transform hover:-translate-y-2 mb-8'>
                            <img src={project.img} alt="Project Thumbnail" className='w-full h-48 object-cover transform hover:scale-110 transition duration-500 ease-in-out' />
                            <div className='p-6 w-full'>
                                <h2 className='mb-4 text-xl font-semibold text-white'>{project.projectName}</h2>
                                <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition duration-300 ease-in-out mb-2 sm:mb-0'>Github</a>
                                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-400 transition duration-300 ease-in-out'>Live Site</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section id='contact'>
                <hr className="mt-10 mx-20 md:mx-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section>
        </>
    );
}
