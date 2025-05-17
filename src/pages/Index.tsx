
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return <Layout>
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
          <h2 className="text-2xl font-bold mb-4 text-center">ÚLTIMAS NOTICIAS</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-center">CURSO APERTURA INTERVENCIONES EN INMUEBLES</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <img src="/lovable-uploads/ef926983-66af-40b5-b7d0-8b97b273ff3a.png" alt="Operativo Unidad Especial en Aperturas" className="rounded-lg max-w-full h-auto mb-2" />
                <p className="text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
              </div>
              <div className="mt-4 space-y-2">
                <p><strong>FECHA:</strong> 24, 25 Y 26 DE JUNIO DE 2025</p>
                <p><strong>DIPLOMA / CERTIFICADO:</strong> Oficial y Baremable</p>
                <p><strong>PLAZAS:</strong> 15</p>
                <p><strong>INFORMACIÓN / INSCRIPCIONES:</strong></p>
                <p>TFNO.: 655478818</p>
                <p>E-MAIL: formacion@defensapolicial.es</p>
                <p>www.defensapolicial.es</p>
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos" className="text-blue-600 hover:underline">CURSO APERTURAS INMUEBLES</Link></p>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium">Seminario de técnicas avanzadas</h3>
              <p className="text-gray-600">El próximo mes recibiremos a instructores internacionales para un seminario especial.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Index;
