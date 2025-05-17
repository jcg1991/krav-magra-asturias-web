
import React from 'react';
import Layout from '../components/Layout';

const KravMaga = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Krav Maga</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Historia y Filosofía</h2>
        <p className="mb-4">
          El Krav Maga (en hebreo: קרב מגע, "combate de contacto") fue desarrollado por Imre Lichtenfeld (también conocido como Imi Sde-Or) 
          para las Fuerzas de Defensa de Israel a mediados del siglo XX.
        </p>
        <p>
          Se caracteriza por su enfoque en situaciones reales de conflicto, su simplicidad técnica y su efectividad probada en combate real.
        </p>
      </div>
    </Layout>
  );
};

export default KravMaga;
