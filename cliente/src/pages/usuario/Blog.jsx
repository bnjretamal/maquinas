import React from "react";
import Nosotros from '../../assets/nosotros.png'
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center pt-[20vh] mb-0 bg-[#F9F9F9]'>
        <h4 className='font-bold text-[#00df9a] text-1xl '>CHILE VENDING</h4>
        <h2 className='md:text-5xl sm:text-4xl text-xl font-bold text-[#282828]'>ULTIMA NOTICIA</h2>
      </div>
      <div className="min-h-screen flex justify-center items-center p-8 bg-[#F9F9F9]">
        <div className="w-full max-w-98rem p-20 dark:bg-gray-800 dark:border-gray-700  shadow-lg flex items-center rounded-lg my-10">
          <div className="img-pod transform -translate-x-8 relative">
            <img src={Nosotros} alt="" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="text-gray-200">22 de marzo 2023</h3>
            <h1 className="text-5xl my-6 mr-40 uppercase text-gray-200 font-bold">Camanchaca elige nuestros servicios</h1>
            <p className="mb-6 md:text-3xl sm:text-2xl text-xl  text-gray-200 font-sans  font-light leading-relaxed  antialiased">Camanchaca inauguró expendedora de conservas de Jurel en la Estación Puerto de Valparaíso</p>
            <Link to='/Ultima-Noticia'>
              <button className="uppercase bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Leer Más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Noticia/> */}
      <div className="flex flex-col bg-[#F9F9F9]">
        <div className='flex flex-col items-center justify-center pt-10 mb-0 '>
          <h4 className='font-bold text-[#00df9a] text-1xl '>CHILE VENDING</h4>
          <h2 className='md:text-5xl sm:text-4xl text-xl font-bold text-[#282828]'>NOTICIAS ANTERIORES</h2>
        </div>
        <div className="flex flex-row justify-center mt-[15vh] mb-[30vh] gap-[4rem] flex-wrap">
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Noticia 1
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
            <Link to='/Ultima-Noticia'>
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Leer más
              </button>
            </Link>
            </div>
          </div>
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Noticia 2
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
            <Link to='/Ultima-Noticia'>
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Leer más
              </button>
            </Link>
            </div>
          </div>
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Noticia 3
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
            <Link to='/Ultima-Noticia'>
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Leer más
              </button>
            </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Blog
