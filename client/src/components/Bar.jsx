import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiFolderSimpleStarFill } from "react-icons/pi";
import { GrContact } from "react-icons/gr";

export default function Bar() {
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="fixed bottom-5 inset-x-0 mx-auto w-full p-4 bg-opacity-90 bg-gray-900 rounded-t-xl shadow-lg flex justify-around items-center space-x-1 sm:space-x-4 md:max-w-lg lg:max-w-xl">
            <div onClick={() => handleSmoothScroll('home')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <MdHomeFilled />
            </div>
            <div onClick={() => handleSmoothScroll('about')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <BsFillPersonFill />
            </div>
            <div onClick={() => handleSmoothScroll('experience')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <MdLibraryBooks />
            </div>
            <div onClick={() => handleSmoothScroll('skills')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <FaMagnifyingGlass />
            </div>
            <div onClick={() => handleSmoothScroll('projects')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <PiFolderSimpleStarFill />
            </div>
            <div onClick={() => handleSmoothScroll('contact')} className="text-xl text-white hover:text-purple-500 cursor-pointer">
                <GrContact />
            </div>
        </div>
    );
}
