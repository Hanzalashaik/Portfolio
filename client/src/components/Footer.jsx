import React from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="h-96 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-4">
            <div className="h-80 flex flex-col justify-center items-center max-w-screen-lg mx-auto text-center">
                <button onClick={scrollToTop}>
                    <IoIosArrowDropupCircle className='text-4xl mb-10 hover:scale-110 cursor-pointer' />
                </button>
                <h1 className="text-xl font-bold md:text-2xl">Designed and Developed by</h1>
                <p className="text-md mt-2 md:text-lg">Hanzala Shaikh ❤️👨‍💻</p>
                <p>
                    Copyright &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
