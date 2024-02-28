import React from 'react'
import experiences from "../experience.js"

export default function Experience() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-white font-semibold'>Experience</h1>
                <div className="my-12 px-4 ">

                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8">
                            <div className="year-section text-xl font-semibold text-indigo-600 mb-2">{exp.year}</div>
                            <div className="description-section text-white font-semibold">{exp.company}</div>
                            <div className="description-section text-white">{exp.description}</div>
                            <hr className="mt-4 border-t border-gray-200" />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
