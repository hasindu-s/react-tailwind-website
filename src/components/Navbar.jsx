import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] bg-zinc-200 fixed z-10 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand.</h1>
          <ul className='hidden md:flex'>
            <li className='cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='cursor-pointer'><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='cursor-pointer'><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li className='cursor-pointer'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='bg-transparent bg-slate-300 text-indigo-600 mr-4 px-8 py-3'>Log in</button>
          <button className='px-8 py-3'>Sign up</button>
        </div>
        <div className='md:hidden cursor-pointer mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' /> }
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-inherit w-full px-8 md:hidden'}>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClick} to="about" smooth={true} offset={-200} duration={500}>About</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClick} to="support" smooth={true} offset={-50} duration={500}>Support</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClick} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <Link onClick={handleClick} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link>
        </li>
        <div className='flex flex-col my-4'>
          <button className='bg-slate-300 text-indigo-600 mb-4 px-8 py-3'>Log in</button>
          <button className='px-8 py-3'>Sign in</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;