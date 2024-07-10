import React from 'react'
import {
  RiHome2Line,
  RiStore2Line,
  RiContactsBook2Line,
  RiStickyNoteFill,
  RiLoginBoxFill
} from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:3000/api/logout')
      .then(response => {
        // Eliminar el token de localStorage o limpiar el estado de autenticación
        localStorage.removeItem('token');
        // Redirigir al usuario
        navigate('/login');
      })
      .catch(error => {
        console.error('Error al cerrar sesión', error);
      });
  };

  return (
    <div className='xl:h-[100vh] fixed xl:static w-full h-full -left-full top-0 flex flex-col justify-between'>
      <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
        <h1 className='text-xl text-white font-bold'>Joaquin Torres</h1>
        <p className='bg-secondary-100 py-1 px-3 rounded-full'>Administrador</p>

      </div>
      <div className='bg-[#064e3b] p-8 rounded-tr-[100px] h-[70vh] text-xl'>
        <nav>
            <Link to="/admin/inicio-admin" className='flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-[#065f46]'>
                <RiHome2Line className='text-white'/> Inicio
            </Link>
            <Link to="/admin/maquinas-admin" className='flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-[#065f46]'>
                <RiStore2Line className='text-white'/> Maquinas
            </Link>
            <Link to="/admin/blog-admin" className='flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-[#065f46]'>
                <RiStickyNoteFill className='text-white'/> Blog
            </Link>
            <Link to="/admin/contactos-admin"className='flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-[#065f46]'>
                <RiContactsBook2Line className='text-white'/> Contactos
            </Link>
        </nav>
        <button onClick={handleLogout} className='text-white w-full flex items-center justify-start mt-[15rem]'>
            <RiLoginBoxFill className='text-white'/> Cerrar sesión
          </button>

      </div>
    </div>
  )
}

export default Sidebar
