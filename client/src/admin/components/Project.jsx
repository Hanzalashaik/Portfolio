import React, { useState } from 'react';
import axios from "axios"
import config from "../../config.json"
import toast from 'react-hot-toast';

export default function Project() {
    const [projectname, setProjectName] = useState('');
    const [githublink, setGithubLink] = useState('');
    const [livelink, setLiveSiteLink] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = config.URL;
        const token = localStorage.getItem("token");
        const projectData = {
            projectname,
            githublink,
            livelink,
            image
        }
        try {
            const response = await axios.post(`${URL}/api/project`, projectData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "access-token": token,
                },
            });
            toast.success(response.data.message)
            setProjectName('');
            setGithubLink('');
            setLiveSiteLink('');
            setImage(null)
            // console.log(response);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!!")
        }
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
                        value={projectname}
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
                        value={githublink}
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
                        value={livelink}
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
