import React from 'react'
import contact from "../assets/contact.svg"

export default function Contact() {
    return (
        <>
            <div className=' flex justify-center mt-10'>
                <h1 className='font-semibold text-3xl'>Contact Me</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center px-2 gap-10 min-h-screen">
                <div className="flex-1 flex justify-center animate-fade-in-up">
                    <img src={contact} alt="Contact Us" style={{ width: '300px', height: '350px' }} />
                </div>
                <div className="flex-1 ml-10 flex flex-col items-center md:items-end text-center md:text-left px-10 animate-slide-in-right">
                    <form className="w-full max-w-lg">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
                            <input type="text" id="name" placeholder='Enter your name...' className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md shadow-sm py-2 px-4 block w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
                            <textarea id="message" rows="4" placeholder='Enter message...' className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-md shadow-sm py-2 px-4 block w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
