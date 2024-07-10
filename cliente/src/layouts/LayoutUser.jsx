// LayoutAuth.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Buttonwsp from '../pages/usuario/Buttonwsp';

const LayoutAuth = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* El contenido principal de la página */}
        <Buttonwsp/>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
