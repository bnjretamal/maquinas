import React from 'react'
import Maquina_arriendo from '../../assets/maquina_snack_bebestible.png'

const Vista_Maquina = () => {
  return (
    <div className='w-full bg-[#F9F9F9] py-[15rem] px-4 text-gray-700 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Maquina_arriendo} className='w-[400px] mx-auto my-4'/>
        <div className='flex flex-col justify-center gap-1'>
          <p className='text-[#00df9a] font-bold'>ELIGE TU MAQUINA PARA SATISFACER TODAS LAS NECESIDADES DE TUS CLIENTES</p>
          <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold py-2 uppercase'>Maquina de Snack y Bebestible</h1>
          <p className='md:text-2xl sm:text-2xl text-xl'>En Chile Vending, entendemos la importancia de la innovación en el mundo de las máquinas expendedoras. Nuestros equipos están equipados con pantallas táctiles interactivas, opciones de pago versátiles, y un sistema de gestión inteligente que permite un monitoreo en tiempo real y una reposición eficiente de productos.
          Ya sea en oficinas, escuelas, hospitales o cualquier otro entorno, nuestras máquinas expendedoras están diseñadas para adaptarse a diversas necesidades y ofrecer una experiencia de compra excepcional. Simplifique la gestión de su negocio y deleite a su audiencia con la revolución de las máquinas expendedoras de Chile Vending. La innovación y la comodidad se unen en una sola solución.
          </p>
          <a href="https://api.whatsapp.com/send?phone=56934255664"> 
          <button className="mt-5 uppercase bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Solicitar Máquina
          </button>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Vista_Maquina
