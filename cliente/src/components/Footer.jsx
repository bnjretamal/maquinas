import React from 'react';
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'



const Footer = () => {
  return (
    <div  className='w-full  py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#000300] '>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CROSSI EXPENDEDORAS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias quisquam tempora officia. Facere vel illo facilis fugit voluptatibus in numquam iste inventore explicabo repellat.</p>
        <div className='flex  justify-between md:w-[80%] my-6 text-3xl'>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaTwitterSquare/>
          <FaWhatsappSquare/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div>
          <h6 className='font-medium text-gray-400'>MAQUINAS</h6>
          <ul>
            <li className='py-2 text-sm'>Maquina de Cafe</li>
            <li className='py-2 text-sm'>Maquina de Bebestible</li>
            <li className='py-2 text-sm'>Maquina de Bebestible & Snack</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>NOTICIAS</h6>
          <ul>
            <li className='py-2 text-sm'>Maquina de Cafe</li>
            <li className='py-2 text-sm'>Maquina de Bebestible</li>
            <li className='py-2 text-sm'>Maquina de Bebestible & Snack</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>MAS SOBRE NOSOTROS</h6>
          <ul>
            <li className='py-2 text-sm'>Maquina de Cafe</li>
            <li className='py-2 text-sm'>Maquina de Bebestible</li>
            <li className='py-2 text-sm'>Maquina de Bebestible & Snack</li>
          </ul>
        </div>

      </div>
      <div>
        <h2 className='font-medium text-gray-400'>HORARIOS DE ATENCION</h2>
        <p>LUN-VIER</p>
        <p>08:30-20:30</p>
        <p>SAB-DOM</p>
        <p>08:30-13:00</p>
        <p>+5691234567</p>
      </div>


    </div>
  );
}

export default Footer;
