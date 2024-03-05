import React, { useState } from 'react';
import axios from "axios";
import config from "../../config.json"
import { toast } from "react-hot-toast"

export default function SocialMediaForm() {
  const [whatsappnumber, setWhatsApp] = useState('');
  const [twiterlink, setTwitter] = useState('');
  const [instagramlink, setInstagram] = useState('');
  const [githublink, setGithub] = useState('');
  const [linkedinlink, setLinkedIn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = config.URL;
    const token = localStorage.getItem("token");
    const socialMediaData = {
      whatsappnumber,
      instagramlink,
      githublink,
      twiterlink,
      linkedinlink,
    }

    try {
      const response = await axios.put(`${URL}/api/socialmedia`, socialMediaData, {
        headers: {
          "access-token": token,
        }
      });
      // console.log(response);
      setWhatsApp('');
      setInstagram('');
      setGithub('');
      setTwitter('');
      setLinkedIn('');
      toast.success(response.data.message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg bg-white">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold mb-2" htmlFor="whatsApp">WhatsApp:</label>
          <input
            type="text"
            id="whatsApp"
            value={whatsappnumber}
            onChange={(e) => setWhatsApp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="WhatsApp number or link"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="twitter">Instagram:</label>
          <input
            type="text"
            id="instagram"
            value={instagramlink}
            onChange={(e) => setInstagram(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="@username"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="twitter">Twitter:</label>
          <input
            type="text"
            id="twitter"
            value={twiterlink}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="@username"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            value={githublink}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="GitHub profile link"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="linkedIn">LinkedIn:</label>
          <input
            type="text"
            id="linkedIn"
            value={linkedinlink}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="LinkedIn profile link"
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
}
