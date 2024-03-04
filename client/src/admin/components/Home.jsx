import React, { useState } from 'react';
import axios from "axios";
import config from "../../config.json";
import { toast } from "react-hot-toast"


export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = config.URL;
    const token = localStorage.getItem("token");
    try {
      const formData = new FormData();
      formData.append("pdf", pdfFile);

      const response = await axios.post(`${URL}/api/home/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "access-token": token,
        },
      });

      // console.log(response);
      toast.success(response.data.message)
      setPdfFile(null);

    } catch (error) {
      console.log(error);
      toast.error("Failed to upload pdf")

    }
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 shadow-md rounded-lg bg-white">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold mb-2" htmlFor="pdfFile">Upload PDF:</label>
          <input
            type="file"
            id="pdfFile"
            accept="application/pdf"
            onChange={handlePdfChange}
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
