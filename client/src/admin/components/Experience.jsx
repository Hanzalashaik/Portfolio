import axios from 'axios';
import React, { useState } from 'react';
import config from "../../config.json"
import toast from 'react-hot-toast';

export default function Experience() {
  const [year, setYear] = useState('')
  const [companyname, setCompany] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = config.URL;
    const token = localStorage.getItem("token");
    const experienceData = {
      year,
      companyname,
      description
    }
    // console.log(experienceData);
    try {
      const response = await axios.post(`${URL}/api/experience`, experienceData, {
        headers: {
          "access-token": token,
        }
      });
      // console.log(response);
      setYear('');
      setCompany('');
      setDescription('');
      toast.success(response.data.message)

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!")
    }
  }
  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold mb-2" htmlFor="year">Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} id="year" className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="companyName">Company Name:</label>
          <input type="text" value={companyname} onChange={(e) => setCompany(e.target.value)} id="companyName" className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" rows="4"></textarea>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
}
