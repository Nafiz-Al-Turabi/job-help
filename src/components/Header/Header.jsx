import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src="https://i.ibb.co/TrgWR3y/logo.png" className="h-6 md:h-8 md:mr-3" alt="" />
                </Link>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-cyan-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-300 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0">Start Applying</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 xl:hidden text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen} onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 text-2xl md:text-[16px] font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <ActiveLink to="/" className="text-cyan-500 text-base  hover:text-cyan-500 duration-500">Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="statistics" className="anchor">Statistics</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="appliedjob" className="anchor">Applied jobs</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="blog" className="anchor">Blog</ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
