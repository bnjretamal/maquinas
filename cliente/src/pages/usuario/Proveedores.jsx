import React, { useState } from "react";
import Proveedor1 from '../../assets/prov1.png';
import Proveedor2 from '../../assets/prov2.png'; // Cambia la importación según tus necesidades
import Proveedor3 from '../../assets/prov3.png'; // Cambia la importación según tus necesidades

const Proveedores = () => {
  const proveedores = [Proveedor1, Proveedor2, Proveedor3]; // Agrega más imágenes según sea necesario
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? proveedores.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % proveedores.length);
  };

  const visibleImages = proveedores.slice(currentIndex, currentIndex + 3);

  return (
    <section className="proveedores bg-[#F9F9F9] py-16">
      <div className="container mx-auto px-4 mb-24 lg:px-8">
        <h1 className="md:text-6xl sm:text-3xl text-2xl font-bold py-2 text-black mt-12 mb-32 text-center">Proveedores</h1>
        <div className="proveedores-images flex justify-between items-center">
          <button className="arrow" onClick={showPrevious} style={{ fontSize: "24px" }}>
            ◀
          </button>
          {visibleImages.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Proveedor ${index + currentIndex + 1}`}
              className="w-56 h-auto"
            />
          ))}
          <button className="arrow" onClick={showNext} style={{ fontSize: "32px" }}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proveedores;
