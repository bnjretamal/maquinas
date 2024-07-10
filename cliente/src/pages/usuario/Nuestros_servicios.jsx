import React from 'react'
import { FaRepeat, FaScrewdriverWrench,FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";




const Nuestros_servicios = () => {
  return (
    <div className='bg-[#F9F9F9]'>
      <div className='max-w-[1320px] md:py-[80] py-5 mx-auto'>
        <h1 className='text-4xl text-center text-gray-700 uppercase'>Ofrecemos distintos servicios</h1>
        <p className='text-gray-700 text-lg text-center pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, consequuntur! </p>
      </div>
      <div className='max-w-[1200px] mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6  text-gray-700'>
        <div className='shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white '>
          <FaRepeat className='text-4xl text-[#00df9a] mx-[6.5rem]'/>
          <h3 className='text-xl py-2 uppercase'>Reposicion</h3>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum.</p>
        </div>
        <div className='shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white'>
          <FaScrewdriverWrench className='text-4xl text-[#00df9a] mx-[6.5rem]'/>
          <h3 className='text-xl py-2 uppercase'>Mantenimiento</h3>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum.</p>
        </div>
        <div className='shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white'>
          <MdOutlinePhonelinkRing className='text-4xl text-[#00df9a] mx-[6.5rem]'/>
          <h3 className='text-xl py-2 uppercase'>Monitoreo 24/7hr</h3>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum.</p>
        </div>
        <div className='shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white'>
          <FaArrowTrendUp className='text-4xl text-[#00df9a] mx-[6.5rem]'/>
          <h3 className='text-xl py-2 uppercase'>Mejoras</h3>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum.</p>
        </div>
      </div>
    </div>
  )
}

export default Nuestros_servicios
