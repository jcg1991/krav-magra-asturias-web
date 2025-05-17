
import React from 'react';
import Layout from '../components/Layout';

const Informate = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Infórmate</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          Aquí encontrarás toda la información relevante sobre nuestros cursos, metodología y filosofía.
        </p>
        <p>
          Próximamente más contenido...
        </p>
      </div>
    </Layout>
  );
};

export default Informate;
