import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

const Maquinas = () => {
  const [noticias, setNoticias] = useState([
    { id: uuidv4(), titulo: 'Nombre Maquina', cuerpo: 'Descripcion', imagen: '' },
  ]);

  const [noticiaEditando, setNoticiaEditando] = useState({
    id: null,
    titulo: '',
    cuerpo: '',
    imagen: '',
  });

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const agregarNoticia = () => {
    // Agregar noticia
    const nuevaNoticia = {
      id: uuidv4(),
      titulo: 'Nombre Maquina',
      cuerpo: 'Descripcion de la nueva maquina',
      imagen: '',
    };

    setNoticias([...noticias, nuevaNoticia]);
  };

  const editarNoticia = (id) => {
    // Lógica para editar una noticia (puedes implementar un formulario de edición)
    const noticiaEnEdicion = noticias.find((noticia) => noticia.id === id);
    setNoticiaEditando({ ...noticiaEnEdicion });
  };

  const manejarCambioImagen = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onloadend = () => {
        setImagenSeleccionada(lector.result);
      };
      lector.readAsDataURL(archivo);
    }
  };

  const guardarEdicion = (id, nuevoTitulo, nuevoCuerpo, nuevaFecha, nuevaImagen) => {
    // Lógica para guardar los cambios de edición
    const nuevasNoticias = noticias.map((noticia) =>
      noticia.id === id
        ? { ...noticia, titulo: nuevoTitulo, cuerpo: nuevoCuerpo, imagen: nuevaImagen }
        : noticia
    );

    setNoticias(nuevasNoticias);
    setNoticiaEditando({ id: null, titulo: '', cuerpo: '', imagen: '' }); // Limpiar el estado de edición
    setImagenSeleccionada(null);
  };

  const cancelarEdicion = () => {
    // Lógica para cancelar la edición
    setNoticiaEditando({ id: null, titulo: '', cuerpo: '', imagen: '' });
    setImagenSeleccionada(null);
  };

  const eliminarNoticia = (id) => {
    // Lógica para eliminar una noticia
    setNoticias((prevNoticias) => prevNoticias.filter((noticia) => noticia.id !== id));
    setNoticiaEditando({ id: null, titulo: '', cuerpo: '', imagen: '' }); // Limpiar el estado de edición si está activo para la noticia eliminada
    setImagenSeleccionada(null);
  };

  return (
    <div>
      <div className='flex items-center justify-between gap-y-4'>
        <div>
          <h1 className='font-bold text-[#f9fafb] text-xl uppercase'>Maquinas</h1>
        </div>
        <div className='flex flex-row gap-2'>
          <button
            className='bg-secondary-100/50 flex items-center gap-2 py-2 px-4 rounded-lg hover'
            onClick={agregarNoticia}
          >
            <RiAddFill /> Agregar
          </button>
        </div>
      </div>
      {/* Renderizar las noticias */}
      <div className='flex flex-wrap mt-[10vh] text-gray-700 gap-2'>
        {noticias.map((noticia) => (
          <div key={noticia.id} className={`w-1/3 p-4 bg-white rounded-lg mb-4 shadow-lg ${noticiaEditando.id === noticia.id ? 'border-blue-500 shadow-lg bg-white' : ''}`}>
            {noticiaEditando.id === noticia.id ? (
              <>
                <div className='mb-2'>
                  <label className='text-gray-500'>Imagen:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={manejarCambioImagen}
                    className='p-2 w-full border rounded'
                  />
                  {imagenSeleccionada && (
                    <img src={imagenSeleccionada} alt="Vista previa" className="mt-2 w-full rounded" />
                  )}
                </div>
                <div className='mb-2'>
                  <label className='text-gray-500'>Título:</label>
                  <input
                    type="text"
                    value={noticiaEditando.titulo}
                    onChange={(e) => setNoticiaEditando({ ...noticiaEditando, titulo: e.target.value })}
                    className='p-2 w-full border rounded bg-transparent'
                  />
                </div>
                <div className='mb-2'>
                  <label className='text-gray-500'>Cuerpo:</label>
                  <textarea
                    value={noticiaEditando.cuerpo}
                    onChange={(e) => setNoticiaEditando({ ...noticiaEditando, cuerpo: e.target.value })}
                    className='p-2 w-full border rounded bg-transparent'
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    onClick={() =>
                      guardarEdicion(
                        noticia.id,
                        noticiaEditando.titulo,
                        noticiaEditando.cuerpo,
                        noticiaEditando.fecha,
                        imagenSeleccionada
                      )
                    }
                    className='bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600'
                  >
                    Guardar
                  </button>
                  <button
                    onClick={cancelarEdicion}
                    className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600'
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                {noticia.imagen && (
                  <img src={noticia.imagen} alt="Imagen de la noticia" className="w-full h-[25rem] object-fill rounded" />
                )}
                <h2 className='text-xl font-bold mb-2 '>{noticia.titulo}</h2>
                <p className='mb-2'>{noticia.cuerpo}</p>
                <p className='text-gray-500'>{noticia.fecha}</p>
                <div className='flex justify-end mt-2'>
                  <button
                    onClick={() => editarNoticia(noticia.id)}
                    className='bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600'
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarNoticia(noticia.id)}
                    className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
                  >
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maquinas;


