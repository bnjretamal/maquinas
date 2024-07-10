import React from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
  const { register, formState: {errors},handleSubmit } = useForm();

  return (
    <div className="max-w-md mx-auto mt-40 mb-40  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#000300]">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-bold">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            {...register("nombre",{required: true, maxLength:10})}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p> }
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-700 font-bold">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            {...register("apellido", {required:true, maxLength:10})}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ciudad" className="block text-gray-700 font-bold">Ciudad</label>
          <select
            id="ciudad"
            name="ciudad"
            {...register("ciudad", {required:true})}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="Sa">Santiago</option>
            <option value="Vi">Viña del Mar</option>
            <option value="Ra">Rancagua</option>
            <option value="Ot">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700 font-bold">Telefono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            {...register("telefono",{required:true})}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>    
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
