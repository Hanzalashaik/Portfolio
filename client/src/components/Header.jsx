import React from 'react';

function Header() {
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className='bg-slate-800 h-20 w-full flex justify-center items-center '>
            <div>
                <ul className='flex justify-center items-center gap-9 font-semibold text-lg text-white '>
                    <li><a href="#home" onClick={() => handleSmoothScroll('home')}>Home</a></li>
                    <li><a href="#about" onClick={() => handleSmoothScroll('about')}>About</a></li>
                    <li><a href="#experience" onClick={() => handleSmoothScroll('experience')}>Experience</a></li>
                    <li><a href="#skills" onClick={() => handleSmoothScroll('skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={() => handleSmoothScroll('projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={() => handleSmoothScroll('contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
