import React, { useState } from 'react';
import Experience from './components/Experience';
import Project from './components/Project';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Home from './components/Home';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Intro');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
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
                  href="#"
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
