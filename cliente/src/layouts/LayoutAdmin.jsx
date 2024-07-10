import { useEffect }from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LayoutAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si no hay token, redirige al inicio de sesión
      navigate('/login');
    } else {
      axios.get('http://localhost:3000/auth/maquinas', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
          // Manejar la respuesta
          console.log('menssage', response.data);
        })
        .catch(error => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.log(error)
            navigate('/login'); // Redirigir al inicio de sesión
          }
        });
    }
  }, [navigate]);
  
  return (
    <div className='min-h-screen grid  grid-cols-1   xl:grid-cols-6 bg-secondary-900'>
      <Sidebar/>
      <div className='xl:col-span-5'>
        <Header/>
        <div className='h-[90vh] overflow-y-scroll p-8'>
          <Outlet /> {/* Utiliza Outlet para renderizar páginas secundarias */}
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin
