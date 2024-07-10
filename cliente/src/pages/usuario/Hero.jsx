import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className='text-white bg-[#000300]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>


        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className='font-Opensans md:text-7xl sm:text-6xl text-4xl fond-bold md:py-6'
        >
          MAQUINAS EXPENDEDORAS
        </motion.h1>
        {/* <h1 className='font-Opensans md:text-7xl sm:text-6xl text-4xl fond-bold md:py-6'>
            MAQUINAS EXPENDEDORAS
        </h1> */}
        <div>
          <TypeAnimation
            sequence={[
              'Amigable con tu bolsillo',
              1000, //Tiempo de pausa en milisegundos
              'Amigable con el Medio ambiente',
              1000,
              'Pero tambien contigo',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />

          <motion.p 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          className='md:text-2xl text-xl font-bold text-[#00df9a]'
        >
          La innovación y la comodidad se unen en una sola solución.
        </motion.p>
          {/* <p className='md:text-2xl text-xl font-bold text-[#00df9a]'>
            La innovación y la comodidad se unen en una sola solución.
          </p> */}
          <Link to="/Servicios">
            <button className="w-[150px] bg-[#00df9a] h-[50px] my-6 mx-auto px-6 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] font-bold uppercase">
              Saber Más
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
