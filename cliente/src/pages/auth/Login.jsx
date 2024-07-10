import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    axios.post('http://localhost:3000/api/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        navigate('/admin/maquinas-admin'); //Cambiar esta ruta para redirreccionar al panel de admin
      })
      .catch(error => {
        // Manejar el error de inicio de sesión
        console.error('Error de inicio de sesión', error);
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='py-[8rem] px-[4rem] rounded-xl shadow-2xl bg-white bg-clip-border'>
        <h1 className='text-3xl uppercase tracking-[5px] mb-8 font-semibold leading-snug text-gray-700  antialiased'>
          Iniciar sesión
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='relative mb-4 border rounded-lg'>
            <input type="text" value={username} className='text-black py-3 pl-8 pr-4 w-full outline-none rounded-lg' onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" />
          </div>
          <div className='relative border rounded-lg '>
            <input type="password" value={password} className='text-black py-3 px-8 w-full outline-none rounded-lg' onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
          </div>
          <button type="submit" className='bg-secondary-100 w-full mt-6 py-3 px-4 rounded-lg text-white hover:text-gray-100 transition-colors'>Ingresar</button>
        </form>
      </div>
    </div>


  );
}

export default Login;
