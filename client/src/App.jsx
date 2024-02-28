import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';

export default function App() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Home />
                <hr className="my-3 ml-16 mx-10 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
                <About />
                <hr className="my-12 ml-16 mx-10 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
                <Experience />
            </div>
        </div>
    );
}
