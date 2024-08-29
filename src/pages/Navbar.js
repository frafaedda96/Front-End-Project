import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-green-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Progetto finale</h1>
        <div className='flex'>
            <button
            className="md:hidden block focus:outline-none pr-5"
             onClick={toggleMenu}
            >
                {isOpen ? 'X' : 'Menu'}
            </button>

            <div className={`flex flex-row items-center gap-4 md:hidden ${
                isOpen ? 'block' : 'hidden'
            }`}>
            <ul>
                    <li>
                        <Link to="/" className="text-base hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/Form" className="text-base hover:underline">Form</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="text-base hover:underline">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register" className="text-base hover:underline">Registrati</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className={`md:block hidden space-x-5`}>
            <Link to="/" className="text-base hover:underline">Home</Link>
            <Link to="/Form" className="text-base hover:underline">Form</Link>
            <Link to="/Login" className="text-base hover:underline">Login</Link>
            <Link to="/Register" className="text-base hover:underline">Register</Link>
        </div>
          
        
      </nav>
    </header>
  );
};

export default Navbar;

