
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursosPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Cursos Disponibles</h1>
        
        <Card id="curso-inmuebles" className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSO APERTURA INTERVENCIONES EN INMUEBLES</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/ef926983-66af-40b5-b7d0-8b97b273ff3a.png" 
                  alt="Operativo Unidad Especial en Aperturas" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
                <p className="mt-3 text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">FECHA:</p>
                    <p className="text-primary font-semibold">24, 25 Y 26 DE JUNIO DE 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
                    <p>Oficial y Baremable</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">PLAZAS:</p>
                    <p>15</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">INFORMACIÓN / INSCRIPCIONES:</p>
                    <p>TFNO.: 655478818</p>
                    <p>E-MAIL: formacion@defensapolicial.es</p>
                    <p>www.defensapolicial.es</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                    <Link to="/curso-inmuebles" className="text-white">VER MÁS INFORMACIÓN</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* New Course */}
        <Card id="curso-autoproteccion" className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center space-y-4">
                <img 
                  src="/lovable-uploads/c383a2e7-3fd4-48cb-8b56-343da38ae2b1.png" 
                  alt="Autoprotección del hogar" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
                <img 
                  src="/lovable-uploads/fafb3b38-5f38-41da-acc1-df3250599a61.png" 
                  alt="Defensa personal en el hogar" 
                  className="rounded-lg w-full h-auto shadow-md mb-2" 
                />
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">FECHA:</p>
                    <p className="text-primary font-semibold">24 Y 25 DE MAYO DE 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">HORARIO:</p>
                    <p>Sábado: 10 a 14h y 14 a 20h</p>
                    <p>Domingo: 9.30 a 15h</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DESTINATARIOS:</p>
                    <p>Civiles con pretensiones implementar tácticas de defensa y protección para su hogar y familia.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
                    <p>Oficial y Baremable</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">Nº PLAZAS:</p>
                    <p>15</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                    <Link to="/curso-autoproteccion" className="text-white">VER MÁS INFORMACIÓN</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">
            <span className="font-bold">Próximamente:</span> Estamos preparando nuevos cursos especializados. Consulta periódicamente esta página o suscríbete a nuestro boletín para estar al día.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CursosPage;
