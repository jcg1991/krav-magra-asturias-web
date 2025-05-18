
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursoInmueblesUrbanoPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS</h1>
        
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">DETALLES DEL CURSO</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/0771f624-8a28-4e01-ac4e-a5842f94e65f.png" 
                  alt="Intervención en Inmuebles y Zonas Urbanizadas" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">FECHA:</p>
                    <p className="text-primary font-semibold">11, 12 DE ENERO DE 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
                    <p>Oficial y Baremable</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">PLAZAS:</p>
                    <p>Limitadas</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">INFORMACIÓN / INSCRIPCIONES:</p>
                    <p>TFNO.: 655478818</p>
                    <p>E-MAIL: formacion@defensapolicial.es</p>
                    <p>www.defensapolicial.es</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                  <h3 className="font-bold text-lg mb-2">DESCRIPCIÓN DEL CURSO</h3>
                  <p>
                    Curso especializado en técnicas de intervención táctica en inmuebles y zonas urbanizadas. 
                    Dirigido a profesionales de seguridad y cuerpos policiales que necesitan desarrollar 
                    habilidades para operaciones tácticas en entornos urbanos.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                  <h3 className="font-bold text-lg mb-2">CONTENIDOS</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Protocolos de intervención en inmuebles</li>
                    <li>Técnicas de control de accesos</li>
                    <li>Seguridad en zonas urbanizadas</li>
                    <li>Coordinación de equipos tácticos</li>
                    <li>Ejercicios prácticos de simulación</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-center">
              <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                <a href="mailto:formacion@defensapolicial.es?subject=Inscripción: CURSO INTERVENCIÓN EN INMUEBLES" className="text-white">
                  SOLICITAR INSCRIPCIÓN
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CursoInmueblesUrbanoPage;
