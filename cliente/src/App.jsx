//App.jsx
import React from 'react'
//import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//Layout
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutUser from './layouts/LayoutUser'

//Pages autentificacion
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Error404 from './pages/Error404'

//Pages admin
import HomeA from './pages/admin/HomeA'
import ChatA from './pages/admin/ChatA'
import Maquinas from './pages/admin/Maquinas'
import ContactosA from './pages/admin/ContactosA'
import BlogA from './pages/admin/BlogA'

//componentes

//pages usuario
import About from './pages/usuario/About'
import Blog from './pages/usuario/Blog'
import Buttonwsp from './pages/usuario/Buttonwsp'
import Contactos from './pages/usuario/Contacto'
import Hero from './pages/usuario/Hero'
import Inicio from './pages/usuario/Inicio'
import LogoCarousel from './pages/usuario/LogoCarousel'
import Medambiente from './pages/usuario/Medambiente'
import Medioambiente from './pages/usuario/Medioambiente'
import Noticia from './pages/usuario/Noticia'
import Nuestros_servicios from './pages/usuario/Nuestros_servicios'
import Servicios from './pages/usuario/Servicios'
import Vista_Maquina from './pages/usuario/Vista_Maquina'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path='/login' element={<Login />} />

        {/* Rutas protegidas bajo /admin/ */}
        <Route path='/admin/*' element={<LayoutAdmin />}>
          <Route index element={<HomeA/>} />
          <Route path='registro' element={<Register />} />
          <Route path='chat-admin' element={<ChatA />} />
          <Route path='blog-admin' element={<BlogA />} />
          <Route path='maquinas-admin' element={<Maquinas />} />
          <Route path='contactos-admin' element={<ContactosA />} />
        </Route>

        {/* Ruta pública en la raíz */}
        {/* <Navbar/> */}
        <Route path='/*' element={<LayoutUser />}>
        <Route index element={<Inicio/>} />
          <Route path="About" element={<About/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path="Contacto" element={<Contactos/>} />
          <Route path="Medio-Ambiente" element={<Medambiente/>} />
          <Route path="Servicios" element={<Servicios/>} />
          <Route path="Ultima-Noticia" element={<Noticia/>} />
          <Route path="Vista_Maquina" element={<Vista_Maquina/>} />
        </Route>
        {/* <Footer/> */}

        {/* Ruta de error 404 */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
