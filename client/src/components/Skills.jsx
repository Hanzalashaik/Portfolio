import React from 'react';
import { DiJavascript } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDigitalOcean } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGooglecloud, SiTailwindcss, SiPostman } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip'

export default function Skills() {
    return (
        <>

            <div className='flex justify-center items-center flex-col'>
                <div>
                    <h1 className='text-3xl font-semibold m-7'>Skills</h1>
                </div>
                <div className='flex flex-wrap justify-center items-center'>

                    <Fade><DiJavascript data-tooltip-id="my-tooltip" data-tooltip-content="JavaScript" className='m-4 text-7xl text-yellow-500' /></Fade>
                    <Fade><FaHtml5 data-tooltip-id="my-tooltip" data-tooltip-content="HTML5" className='m-4 text-7xl text-orange-500' /></Fade>
                    <Fade><FaCss3Alt data-tooltip-id="my-tooltip" data-tooltip-content="CSS3" className='m-4 text-7xl text-blue-500' /></Fade>
                    <Fade><FaReact data-tooltip-id="my-tooltip" data-tooltip-content="React" className='m-4 text-7xl text-blue-400' /></Fade>
                    <Fade><FaNodeJs data-tooltip-id="my-tooltip" data-tooltip-content="NodeJs" className='m-4 text-7xl text-green-500' /></Fade>
                    <Fade><SiMongodb data-tooltip-id="my-tooltip" data-tooltip-content="MongoDB" className='m-4 text-7xl text-green-500' /></Fade>
                    <Fade><SiExpress data-tooltip-id="my-tooltip" data-tooltip-content="ExpressJs" className='m-4 text-7xl text-black' /></Fade>
                    <Fade><FcLinux data-tooltip-id="my-tooltip" data-tooltip-content="Linux" className='m-4 text-7xl' /></Fade>
                    <Fade><FaGitAlt data-tooltip-id="my-tooltip" data-tooltip-content="git" className='m-4 text-7xl text-red-500' /></Fade>
                    <Fade><FaGithub data-tooltip-id="my-tooltip" data-tooltip-content="Github" className='m-4 text-7xl text-black' /></Fade>
                    <Fade><SiGooglecloud data-tooltip-id="my-tooltip" data-tooltip-content="Google Cloud" className='m-4 text-7xl' /></Fade>
                    <Fade><SiTailwindcss data-tooltip-id="my-tooltip" data-tooltip-content="Tailwind CSS" className='m-4 text-7xl text-blue-500' /></Fade>
                    <Fade><SiPostman data-tooltip-id="my-tooltip" data-tooltip-content="Postman" className='m-4 text-7xl text-orange-500' /></Fade>
                    <Fade><FaDigitalOcean data-tooltip-id="my-tooltip" data-tooltip-content="Digital Occean" className='m-4 text-7xl text-blue-500' /></Fade>
                </div>
                <Tooltip id="my-tooltip" />
            </div>
            <section id='projects'>

                <hr className="mt-10 mx-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section>
        </>
    );
}
