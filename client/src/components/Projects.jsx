import React, { useEffect, useState } from 'react';
import axios from "axios";
import config from "../config.json";
import { toast } from 'react-hot-toast';

export default function Projects() {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        const handleProject = async () => {
            const URL = config.URL;
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${URL}/api/projects`, {
                    headers: {
                        "access-token": token,
                    },
                });
                const projectsWithBase64Images = response.data.projects.map(project => {
                    if (project.image) {
                        const base64Image = arrayBufferToBase64(project.image.data.data);
                        return { ...project, base64Image };
                    }
                    return project;
                });
                setProjectData(projectsWithBase64Images);
            } catch (error) {
                console.log(error);
            }
        };
        handleProject();
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

    const handleGithubLinkClick = (link) => {
        if (!link) {
            toast.error('GitHub link is not available');
        }
    };

    const handleLiveLinkClick = (link) => {
        if (!link) {
            toast.error('Live Site link is not available');
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full p-5 bg-slate-800'>
                <h1 className='mb-8 text-3xl font-semibold text-white'>Projects</h1>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4'>
                    {projectData.map((project, index) => (
                        <div key={index} className='flex flex-col bg-blue-900 border items-center rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer transform hover:-translate-y-2 mb-8'>
           
                            {project.base64Image && (
                                <img src={`data:image/jpeg;base64,${project.base64Image}`} alt="Project Thumbnail" className='w-full h-48 object-cover transform hover:scale-110 transition duration-500 ease-in-out' />
                            )}
                            <div className='p-6 w-full'>
                                <h2 className='mb-4 text-xl font-semibold text-white'>{project.projectname}</h2>
                                <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                                    <a href={project.githublink} onClick={() => handleGithubLinkClick(project.githublink)} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition duration-300 ease-in-out mb-2 sm:mb-0'>Github</a>
                                    <a href={project.livelink} onClick={() => handleLiveLinkClick(project.livelink)} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-400 transition duration-300 ease-in-out'>Live Site</a>
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
