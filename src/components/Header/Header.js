import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {


    const [open, setOpen] = useState(false);



    return (
        <nav className='bg-purple-500'>
            <div onClick={() => setOpen(!open)} className="h-10 w-10 md:hidden">
                {
                    open ? <XMarkIcon className='text-white ' /> : <Bars4Icon className='text-white' />
                }
            </div>

            <div className={`md:flex bg-purple-500 w-full mr-10 justify-around text-xl text-white py-4 absolute md:static ease-in-out duration-1000 ${open ? 'top-10' : 'top-[-180px]'}`}>
                <Link to='/' className='px-5 md:px-0 font-bold text-xl md:text-3xl text-orange-400'>Tech Quiz</Link>
                <div className='flex flex-col md:flex-row justify-center align-middle px-3 md:px-0'>
                    <Link to='/' className='mx-2 font-bold text-xl md:text-3xl'>Home</Link>
                    <Link to='/statistics' className='mx-2 font-bold text-xl md:text-3xl'>Statistics</Link>
                    <Link to='/blog' className='mx-2 font-bold text-xl md:text-3xl'>Blog</Link>
                </div>
            </div>

        </nav>
    );
};

export default Header;