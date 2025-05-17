
import React from 'react';
import Layout from '../components/Layout';

const Areas = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Áreas de Entrenamiento</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          Nuestro entrenamiento cubre diversas áreas de la defensa personal y combate, adaptadas a diferentes necesidades y perfiles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Defensa Personal Civil</h3>
            <p>Técnicas básicas y avanzadas para situaciones cotidianas.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Defensa Policial</h3>
            <p>Métodos específicos para cuerpos de seguridad.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Combate Militar</h3>
            <p>Técnicas de combate para contextos de alta intensidad.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-bold mb-2">Seguridad Privada</h3>
            <p>Formación para profesionales del sector de seguridad.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Areas;
