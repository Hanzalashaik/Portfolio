import React, { useState } from 'react';

export default function Project() {
    const [projectName, setProjectName] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [liveSiteLink, setLiveSiteLink] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or another service
        console.log({
            projectName,
            githubLink,
            liveSiteLink,
            image
            // Handle the image file appropriately
        });

        // Reset the form or redirect the user after submission
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg bg-white">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-bold mb-2" htmlFor="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2" htmlFor="githubLink">GitHub Link:</label>
                    <input
                        type="url"
                        id="githubLink"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2" htmlFor="liveSiteLink">Live Site Link:</label>
                    <input
                        type="url"
                        id="liveSiteLink"
                        value={liveSiteLink}
                        onChange={(e) => setLiveSiteLink(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2" htmlFor="image">Project Image:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Submit
                </button>
            </form>
        </div>
    );
}
