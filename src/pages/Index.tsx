
import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Bienvenidos a Krav Maga Asturias</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Método Israelí de Defensa Personal y Combate Cuerpo a Cuerpo</h2>
          <p className="mb-4">
            Krav Maga es un sistema de defensa personal y combate cuerpo a cuerpo desarrollado inicialmente para las Fuerzas de Defensa de Israel y 
            las fuerzas de seguridad israelíes. Está diseñado para situaciones reales, priorizando la eficacia, la simplicidad y la respuesta rápida.
          </p>
          
          <p>
            En nuestra academia en Asturias, ofrecemos formación para civiles, cuerpos de seguridad y profesionales que buscan mejorar sus habilidades
            de defensa personal en situaciones de peligro real.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Para Civiles</h3>
            <p>Aprende técnicas efectivas para protegerte y proteger a tus seres queridos en situaciones de peligro.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Para Profesionales</h3>
            <p>Programas especializados para miembros de cuerpos de seguridad, militares y personal de seguridad privada.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Próximos Cursos</h3>
            <p>Consulta nuestro calendario de formaciones especializadas y cursos intensivos para todos los niveles.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Últimas Noticias</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium">Nuevo curso intensivo en junio</h3>
              <p className="text-gray-600">Abierta inscripción para el curso intensivo de verano 2025. Plazas limitadas.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium">Seminario de técnicas avanzadas</h3>
              <p className="text-gray-600">El próximo mes recibiremos a instructores internacionales para un seminario especial.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
