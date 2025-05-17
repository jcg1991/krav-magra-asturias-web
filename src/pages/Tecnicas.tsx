
import React from 'react';
import Layout from '../components/Layout';

const Tecnicas = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Técnicas</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Principios Técnicos</h2>
        <p className="mb-4">
          El Krav Maga se basa en principios simples pero efectivos que cualquier persona puede aprender y aplicar.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Neutralización rápida de amenazas</li>
          <li>Defensa y contraataque simultáneos</li>
          <li>Uso de movimientos naturales e instintivos</li>
          <li>Técnicas adaptadas a situaciones de estrés real</li>
          <li>Defensa contra múltiples agresores</li>
          <li>Defensa contra armas blancas y de fuego</li>
        </ul>
        <p>
          En esta sección encontrarás información detallada sobre las diferentes técnicas que enseñamos en nuestra academia.
        </p>
      </div>
    </Layout>
  );
};

export default Tecnicas;
