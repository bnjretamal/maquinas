import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-24 px-4 bg-[#000300] text-white fixed top-0 z-50'>
      <h1 className='text-3xl font-bold text-[#00df9a]'>CROSSICHILE</h1>
      <nav>
        <ul className='flex'>
        <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/" className='h-full w-full flex items-center'>Inicio</Link>
          </li>
          <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/About" className='h-full w-full flex items-center'>Quienes somos</Link>
          </li>
          <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/Servicios">Servicios</Link>
          </li>
          <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/Medio-Ambiente">Medio Ambiente</Link>
          </li>
          <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/Blog">Noticias</Link>
          </li>
          <li className='p-4 hover:bg-[#00df9a] hover:text-black transition duration-300'>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
