import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Bar from './components/Bar';

export default function App() {
    return (
        <>
            <div className="flex min-h-screen bg-slate-800 text-white">
                <Sidebar />
                <div className="flex-1">
                    {/* <Header /> */}
                    <main>
                        <Home />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <Contact />
                        <Bar />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}
