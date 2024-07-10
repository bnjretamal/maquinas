import React from 'react';
import Hero from './Hero';
import Medioambiente from './Medioambiente';
import Buttonwsp from '../usuario/Buttonwsp';
import LogoCarousel from './LogoCarousel';
import Nuestros_servicios from './Nuestros_servicios';
import Proveedores from './Proveedores';

const Inicio = () => {
  return (
    <div>
      <Hero/>
      <LogoCarousel/>
      <Nuestros_servicios/>
      <Medioambiente/>
      <Proveedores/>
    </div>
  )
}

export default Inicio
