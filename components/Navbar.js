import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const Navbar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('black');

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#000000');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='#list'>List</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-in duration-300' // Changed background and text color
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='#list'>List</Link>
                        </li>
                    </ul>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-r-lg  dark:bg-white dark:placeholder-gray-400 dark:text-black"
                                required
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="p-2.5 text-sm font-medium h-full text-black bg-white rounded-r-lg focus:ring-4 focus:outline-none dark:bg-white">
                            <AiOutlineSearch className="w-4 h-4 text-black" />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Navbar;
