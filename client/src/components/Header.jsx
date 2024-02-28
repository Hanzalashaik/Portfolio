import React from 'react';

function Header() {

    return (
        <div className='h-20 w-full flex justify-center items-center '>
            <div>
                <ul className='flex justify-center items-center gap-9 font-semibold text-lg text-white '>
                    <li className='hover:scale-105 hover:text-green-500 cursor-pointer'>Home</li>
                    <li className='hover:scale-105 hover:text-green-500 cursor-pointer'>About</li>
                    <li className='hover:scale-105 hover:text-green-500 cursor-pointer'>Experience</li>
                    <li className='hover:scale-105 hover:text-green-500 cursor-pointer'>Projects</li>
                    <li className='hover:scale-105 hover:text-green-500 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
