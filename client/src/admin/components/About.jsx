import React, { useState } from 'react';
import axios from "axios";
import config from "../../config.json";
import toast from 'react-hot-toast';

export default function AboutForm() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = config.URL;
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("description", description);

      const response = await axios.put(`${URL}/api/about`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "access-token": token,
        },
      });

      setImage(null)
      setDescription("");

      // console.log(response);
      toast.success(response.data.message)
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
          <label className="block font-bold mb-2" htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block font-bold mb-2" htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            rows="4"
            placeholder="Tell us about yourself or your brand"
          ></textarea>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
}
