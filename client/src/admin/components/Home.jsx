import React, { useState } from 'react';

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the file upload, typically sending to a server or cloud storage.
    console.log({
      // This will log the file. You would replace this with your actual submission logic.
      pdfFile,
    });

    // Optional: Clear the form or provide feedback to the user
  };

  const handlePdfChange = (e) => {
    // Assuming we want to upload just one PDF file,
    // we take the first file from the file input.
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
