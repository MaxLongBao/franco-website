import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className='flex py-5 px-32 bg-white'>
      <a href='/'>
        <img src={logo} alt='Cerberus Capital Property Investments' className='md:w-1/12'/>
      </a>
    </nav>
  );
}

export default Navbar;
