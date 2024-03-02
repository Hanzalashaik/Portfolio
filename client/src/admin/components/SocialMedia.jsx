import React, { useState } from 'react';

export default function SocialMediaForm() {
  const [whatsApp, setWhatsApp] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the form data to your backend or another service
    console.log({
      whatsApp,
      twitter,
      github,
      linkedIn,
      instagram
    });

    // Reset the form or redirect the user after submission
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg bg-white">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold mb-2" htmlFor="whatsApp">WhatsApp:</label>
          <input
            type="text"
            id="whatsApp"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="WhatsApp number or link"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="twitter">Twitter:</label>
          <input
            type="text"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="@username"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="twitter">Twitter:</label>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="@username"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            value={github}
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
            value={linkedIn}
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
