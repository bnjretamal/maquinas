import React from 'react';
import Maquina_Bebestible from '../../assets/maquina_snack_bebestible.png'
import {
  GiVendingMachine
} from 'react-icons/gi'
import { TbWorldHeart, TbRepeat } from 'react-icons/tb'
import Maquina_Snack from '../../assets/maquina_snack_bebestible.png'
import Maquina_2 from '../../assets/maquina_bebestible.png'
import MaquinaCafe_1 from '../../assets/maquina_cafe2.png' //Esta deberia ser maquina1, pero no está
import MaquinaCafe_2 from '../../assets/maquina_cafe2.png'
import MaquinaCafe_3 from '../../assets/maquina_cafe3.png'
import { Link } from "react-router-dom";

const Servicios = () => {

  return (
    <div>
      <div className='bg-[#F9F9F9] py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-gray-700 mt-[10rem]'>
          <div className='flex flex-col justify-center gap-1'>
            <h3 className='font-arial text-1xl text-zinc-500	'>La innovación y la comodidad se unen en una sola solución</h3>
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold py-2 uppercase text-[#282828]'>ARRIENDO <span className='font-Opensans text-[#00df9a]'>MAQUINAS</span> </h1>
            <p className='md:text-2xl sm:text-2xl text-xl text-gray-700'>¡Bienvenidos a Chile Vending, la vanguardia en soluciones de vending! Nuestras máquinas expendedoras innovadoras están diseñadas para transformar la experiencia de compra y satisfacer las necesidades de su público de manera única. Con tecnología de punta y una amplia variedad de productos, nuestras máquinas ofrecen comodidad y versatilidad como ninguna otra.</p>
          </div>
          <img className='w-[300px] mx-auto my-4' src={Maquina_Bebestible} alt="" />
        </div>
        <div className='w-full bg-[#F9F9F9] py-16 px-4 '> {/*RAZONES PARA ELEGIRNOS*/}

          <div className='flex flex-col items-center justify-center mb-24'>
            <h4 className='font-bold text-[#00df9a] text-2xl'>CHILE VENDING</h4>
            <h2 className='md:text-5xl sm:text-3xl text-xl font-bold text-[#282828]'>RAZONES PARA ELEGIRNOS</h2>
          </div>
          <div className='flex flex-row space-x-5 justify-center'>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <GiVendingMachine className='text-2xl' />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">CONTAMOS CON TECNOLOGÍA DE ULTIMO NIVEL</h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sit!</p>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg className="w-7 h-8 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <TbWorldHeart className='text-2xl' />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">NUESTRA MISION ES AYUDAR AL MEDIO AMBIENTE</h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sed!</p>

            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <TbRepeat className='text-2xl' />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">OPTIMIZAMOS PROCESOS</h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quo!</p>

            </div>

          </div>
        </div>


        <div className='w-full bg-[#F9F9F9] py-16 px-4 flex flex-col'>
          <div className='flex justify-center m-10'>
            <h1 className='md:text-5xl sm:text-3xl text-xl font-bold text-[#282828]'>CATEGORIA MAQUINAS</h1>
          </div>
          {/* MAQUINAS VISTA USUARIO */}



          <div class="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-32">
            <div class="bg-white shadow-md rounded-lg max-w-[20rem] flex flex-col">

              <img class="rounded-t-lg p-8 w-full object-cover" src={Maquina_Snack} alt="product image" />

              <div class="flex-grow flex flex-col justify-end px-5 pb-5">
                <button>
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight mb-8">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </button>
                <div class="flex items-center justify-between mb-8">
                  <span class="text-3xl font-bold text-gray-900 ">$599</span>
                  <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
            </div>
            
            <div class="bg-white shadow-md rounded-lg max-w-[20rem] flex flex-col">

              <img class="rounded-t-lg p-8 w-full object-cover" src={Maquina_2} alt="product image" />

              <div class="flex-grow flex flex-col justify-end px-5 pb-5">
                <button>
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight mb-8">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </button>
                <div class="flex items-center justify-between mb-8">
                  <span class="text-3xl font-bold text-gray-900 ">$599</span>
                  <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
            </div>


            <div class="bg-white shadow-md rounded-lg max-w-[20rem] flex flex-col">

              <img class="rounded-t-lg p-8 w-full h-[60vh] object-cover" src={MaquinaCafe_1} alt="product image" />

              <div class="flex-grow flex flex-col justify-end px-5 pb-5">
                <button>
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight mb-8">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </button>
                <div class="flex items-center justify-between mb-8">
                  <span class="text-3xl font-bold text-gray-900 ">$599</span>
                  <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
            </div>



            <div class="bg-white shadow-md rounded-lg max-w-[20rem] flex flex-col">

              <img class="rounded-t-lg p-8 w-full h-[60vh] object-cover" src={MaquinaCafe_2} alt="product image" />

              <div class="flex-grow flex flex-col justify-end px-5 pb-5">
                <button>
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight mb-8">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </button>
                <div class="flex items-center justify-between mb-8">
                  <span class="text-3xl font-bold text-gray-900 ">$599</span>
                  <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
            </div>



            <div class="bg-white shadow-md rounded-lg max-w-[20rem] flex flex-col">

              <img class="rounded-t-lg p-8 w-full h-[60vh] object-cover" src={MaquinaCafe_3} alt="product image" />

              <div class="flex-grow flex flex-col justify-end px-5 pb-5">
                <button>
                  <h3 class="text-gray-900 font-semibold text-xl tracking-tight mb-8">Apple Watch Series 7
                    GPS, Aluminium Case, Starlight Sport</h3>
                </button>
                <div class="flex items-center justify-between mb-8">
                  <span class="text-3xl font-bold text-gray-900 ">$599</span>
                  <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios;


























































































      {/* 

  

//   return (
//     <div className='bg-[#F9F9F9] py-16 px-4 '>
//       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-gray-700 mt-[10rem]'>
//         <div className='flex flex-col justify-center gap-1'>
//           <h3 className='font-arial text-1xl text-zinc-500	'>La innovación y la comodidad se unen en una sola solución</h3>
//           <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold py-2 uppercase text-[#282828]'>ARRIENDO <span className='font-Opensans text-[#00df9a]'>MAQUINAS</span> </h1>
//           <p className='md:text-2xl sm:text-2xl text-xl text-gray-700'>¡Bienvenidos a Chile Vending, la vanguardia en soluciones de vending! Nuestras máquinas expendedoras innovadoras están diseñadas para transformar la experiencia de compra y satisfacer las necesidades de su público de manera única. Con tecnología de punta y una amplia variedad de productos, nuestras máquinas ofrecen comodidad y versatilidad como ninguna otra.</p>
//         </div>
//         <img className='w-[300px] mx-auto my-4' src={Maquina_Bebestible} alt="" />
//       </div>
    //   <div className='w-full bg-[#F9F9F9] py-16 px-4 '> {/*RAZONES PARA ELEGIRNOS*/

        //     <div className='flex flex-col items-center justify-center mb-24'>
        //       <h4 className='font-bold text-[#00df9a] text-2xl'>CHILE VENDING</h4>
        //       <h2 className='md:text-5xl sm:text-3xl text-xl font-bold text-[#282828]'>RAZONES PARA ELEGIRNOS</h2>
        //     </div>
        //     <div className='flex flex-row space-x-5 justify-center'>
        //       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //         <GiVendingMachine className='text-2xl'/>
        //         </svg>
        //         <a href="#">
        //           <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">CONTAMOS CON TECNOLOGÍA DE ULTIMO NIVEL</h5>
        //         </a>
        //         <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sit!</p>
        //       </div>
        //       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <svg className="w-7 h-8 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //         <TbWorldHeart className='text-2xl'/>      
        //         </svg>
        //         <a href="#">
        //           <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">NUESTRA MISION ES AYUDAR AL MEDIO AMBIENTE</h5>
        //         </a>
        //         <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sed!</p>

        //       </div>
        //       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //         <TbRepeat className='text-2xl'/>             
        //         </svg>
        //         <a href="#">
        //           <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">OPTIMIZAMOS PROCESOS</h5>
        //         </a>
        //         <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quo!</p>

        //       </div>

        //     </div>
        //   </div>
        //   <div className='w-full bg-[#F9F9F9] py-16 px-4 flex flex-col'>
        //     <div className='flex justify-center m-10'>
        //         <h1 className='md:text-5xl sm:text-3xl text-xl font-bold text-[#282828]'>CATEGORIA MAQUINAS</h1>
        //     </div>
        //     {/* CONTENEDORES MAQUINAS */}
        //     <div className='flex flex-row justify-around gap-5 flex-wrap mt-[50px] mr-[100px] mb-[8px] ml-[100px] p-[80px]'>
        //       <Link to="/Vista_Maquina">
        //         <div className='shadow-lg rounded-xl' style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}>
        //           <img className='w-full h-full p-[1.5rem] items-end' src={Maquina_Snack} />
        //         </div>
        //       </Link>
        //       <Link to="/Vista_Maquina">
        //         <div className='shadow-lg rounded-xl' style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}>
        //           <img className='w-full h-full p-[1.5rem] items-end' src={Maquina_2} />
        //         </div>
        //       </Link>
        //       <Link to="/Vista_Maquina">
        //         <div className='shadow-lg rounded-xl' style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}>
        //           <img className='w-full h-full p-[1.5rem] items-end' src={MaquinaCafe_1} />
        //         </div>
        //       </Link>
        //       <Link to="/Vista_Maquina">
        //         <div className='shadow-lg rounded-xl' style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}>
        //           <img className='w-full h-full p-[1.5rem] items-end' src={MaquinaCafe_2} />
        //         </div>
        //       </Link>
        //       <Link to="/Vista_Maquina">
        //         <div className='shadow-lg rounded-xl' style={{ flex: '1', minWidth: '200px', maxWidth: '500px' }}>
        //           <img className='w-full h-full p-[1.5rem] items-end' src={MaquinaCafe_3} />
        //         </div>
        //       </Link>
        //     </div>


        //   </div>
        // </div>
        //   )
        // }

        // export default Servicios */
      }
