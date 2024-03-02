import React from 'react';

export default function Experience() {
  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg">
      <form className="flex flex-col gap-4">
        <div>
          <label className="block font-bold mb-2" htmlFor="year">Year:</label>
          <input type="number" id="year" className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="description">Description:</label>
          <textarea id="description" className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" rows="4"></textarea>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
}
