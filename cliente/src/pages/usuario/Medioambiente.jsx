import React, { useState, useEffect } from 'react';
import Ilustration from '../../assets/caricatura-campo-golf-arboles-cesped-removebg-preview.png'
import { motion, useAnimation } from 'framer-motion';

const Medioambiente = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300) { // Cambia este valor según cuándo deseas que se inicie la animación
        setShouldAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [controls, shouldAnimate]);
  return (
    <div className='w-full bg-[#F9F9F9] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        <img className='w-[500px] mx-auto my-4' src={Ilustration} alt="" />
        <div className='flex flex-col justify-center'>
          <p className='font-bold text-gray-700'>Lorem ipsum dolor sit amet.</p>

          <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className='md:text-5xl sm:text-3xl text-xl font-bold py-2 text-[#282828]'
          >
            
          BUSCAMOS AYUDAR AL MEDIO AMBIENTE
          </motion.h1>
          <p className='text-2xl text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Officia veritatis molestias rem dolore labore asperiores doloribus
            animi accusantium, vero nam? Esse distinctio ut quidem officia.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Medioambiente
