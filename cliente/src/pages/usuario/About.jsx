import React from "react";
import Nosotros from '../../assets/nosotros.png'
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full  py-16 px-4 bg-[#F9F9F9]">
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2 mt-[10rem]'>
        <div className='flex flex-col justify-center gap-1'>
          <h3 className='font-arial text-1xl text-zinc-500	'>La innovación y la comodidad se unen en una sola solución</h3>
          <h2 className='md:text-6xl sm:text-4xl text-3xl font-bold py-2 uppercase text-[#282828]'>CROSSI <span className='font-Opensans text-[#00df9a]'>CHILE</span> </h2>
          <p className='md:text-2xl sm:text-2xl text-xl text-gray-700' >
            Chile Vending fue fundada en 1999 por [nombre del fundador]. Desde entonces, hemos crecido hasta convertirnos en una de las principales empresas de máquinas expendedoras en Chile.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, nam!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, placeat.
            
          </p>
        </div>
        <img className='w-[600px] mx-auto my-4' src={Nosotros} alt="" />
      </div>
      {/* Cartas de Misión, Visión y Valores */}
      <div className="flex flex-row justify-center w-full pt-3 pb-5 px-4 mt-[10rem] mb-[10rem] flex-wrap gap-5 ">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              <FaBullseye className="mr-2" />
              MISIÓN
            </h3>

            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Revolucionamos las máquinas expendedoras con innovación y calidad, proporcionando productos frescos y un servicio
            excepcional para satisfacer las necesidades y superar las expectativas de nuestros clientes.
            </p>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <FaEye className="mr-2" />
              VISIÓN
            </h3>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Buscamos ser líderes en máquinas expendedoras con innovación y calidad. Queremos ser la opción preferida,
            ofreciendo variedad, adaptación constante y alianzas estratégicas para mejorar la experiencia del cliente.
            </p>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <FaHeart className="mr-2" />
              VALOR
            </h3>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Aut ipsa alias animi libero voluptatibus voluptas quod provident non! Maiores natus ut, assumenda saepe eius nihil!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ea.
            </p>
          </div>
        </div>
      </div>
      {/* CARTAS PRESENTACION */}
      <div className='flex flex-col items-center justify-center mb-24'>
        <h4 className='font-bold text-[#00df9a] text-2xl'>CHILE VENDING</h4>
        <h2 className='text-5xl font-bold text-[#282828]'>CONOCE A NUESTRO EQUIPO</h2>
      </div>
      <div className="flex flex-row justify-center gap-5 pb-[20vh] text-gray-700">
        <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
          <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <span className="text-2xl font-semibold">Joaquin Torres</span>
            <p>CEO Crossi Chile</p>
          </div>
        </div>
        <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
          <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <span className="text-2xl font-semibold">Joaquin Torres</span>
            <p>Support Specialist</p>
          </div>
        </div>
        <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
          <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <span className="text-2xl font-semibold">Joaquin Torres</span>
            <p>Support Specialist</p>
          </div>
        </div>
      </div>
      {/* FIN CARTAS */}




    </div>

  )
}

export default About
