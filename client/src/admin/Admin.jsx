import React, { useState } from 'react';
import Experience from './components/Experience';
import Project from './components/Project';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Home from './components/Home';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext.jsx"
import config from "../config.json"

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Intro');
  const { setauthUser } = useAuthContext();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleLogout = () => {
    const logout = async () => {
      const URL = config.URL;
      // const token = localStorage.getItem("token");
      try {
        const response = await axios.post(`${URL}/api/auth/logout`)
        toast.success(response.data.success);

        localStorage.clear();
        setauthUser(null);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!!")
      }
    }
    logout();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow">Portfolio Admin</h1>
        <div className="bg-white">
          <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-center text-gray-500">
            {['Intro', 'About', 'Experience', 'Projects', 'Social Media'].map((tab) => (
              <li key={tab} className="w-1/2 md:w-auto">
                <a
                  href="/admin"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                  className={`inline-block p-4 w-full md:w-auto transition-colors duration-150 ease-in-out ${activeTab === tab ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'}`}
                >
                  {tab}
                </a>
              </li>
            ))}
            <li className="w-1/2 md:w-auto">
              <button
                onClick={handleLogout}
                className="inline-block p-4 w-full md:w-auto transition-colors duration-150 ease-in-out text-red-600 bg-red-100 hover:bg-red-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="p-4">
          {activeTab === 'Intro' && <Home />}
          {activeTab === 'About' && <About />}
          {activeTab === 'Experience' && <Experience />}
          {activeTab === 'Projects' && <Project />}
          {activeTab === 'Social Media' && <SocialMedia />}
        </div>
      </div>
    </div>
  );
}
