import React, { useState } from 'react';
import experiences from "../experience.js";
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Experience() {
    const [selectedYear, setSelectedYear] = useState(null);

    const toggleYearDetails = (year) => {
        if (selectedYear === year) {
            setSelectedYear(null);
        } else {
            setSelectedYear(year);
        }
    };

    return (
        <>

            <div className='flex flex-col justify-center items-center mt-16 bg-slate-800'>
                <h1 className='text-3xl text-white font-semibold animate-fade-in-up'>Experience</h1>
                <div className="my-12 px-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8">
                            <div
                                className="flex items-center cursor-pointer year-section text-xl font-semibold text-green-500 mb-2 hover:text-green-300 transition-colors duration-300 hover:scale-105 transform transition-transform duration-300"
                                onClick={() => toggleYearDetails(exp.year)}
                            >
                                {exp.year}
                                <ChevronDownIcon
                                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${selectedYear === exp.year ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {selectedYear === exp.year && (
                                <div className="transition-all duration-500 ease-in-out overflow-hidden animate-slide-in">
                                    <div className="description-section text-blue-400 font-semibold animate-fade-in">{exp.company}</div>
                                    <div className="description-section text-gray-300 animate-fade-in">{exp.description}</div>
                                    <hr className="mt-4 border-t border-gray-400" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            <section id='skills'>
                <hr className="mt-10 mx-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section >
        </>
    );
}
