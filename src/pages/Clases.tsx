
import React from 'react';
import Layout from '../components/Layout';

const Clases = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Clases</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Horarios y Niveles</h2>
        <p className="mb-4">
          Ofrecemos clases para todos los niveles, desde principiantes hasta avanzados. 
          Nuestros instructores están certificados y cuentan con amplia experiencia.
        </p>
        <p>
          Próximamente más contenido...
        </p>
      </div>
    </Layout>
  );
};

export default Clases;
