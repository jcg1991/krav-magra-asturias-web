import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursosPage = () => {
  // Scroll to top handler function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Cursos Disponibles</h1>
        
        {/* Curso Inmuebles Card */}
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
        
        {/* Curso Autoprotección Card */}
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
        
        {/* Cursos Especiales 2025 Card */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSOS ESPECIALES 2025</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center mt-3 mb-3">
              <img 
                src="/lovable-uploads/296e4e54-8b3f-4aac-84cc-ccd42f280f77.png" 
                alt="Calendario Cursos Especiales 2025" 
                className="rounded-lg max-w-full h-auto mb-2" 
              />
            </div>
            <div className="mt-4 space-y-2 text-center">
              <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos-especiales" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSOS ESPECIALES 2025</Link></p>
            </div>
          </CardContent>
        </Card>
        
        {/* Curso Inmuebles Urbano Card */}
        <Card id="curso-inmuebles-urbano" className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/476d59f1-7e4a-4735-8d61-3912f94e1469.png" 
                  alt="Curso intervención en inmuebles" 
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
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                    <Link to="/curso-inmuebles-urbano" className="text-white">VER MÁS INFORMACIÓN</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* NEW: Curso Legion Española Card */}
        <Card id="curso-legion" className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png" 
                  alt="Grappling Policial" 
                  className="rounded-lg w-full h-auto shadow-md mb-4" 
                />
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <video 
                    controls
                    className="rounded-lg w-full shadow-md"
                    poster="/lovable-uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png"
                  >
                    <source src="http://defensapolicial.es/wp-content/uploads/CURSO-LEGION-ESPANOLA.mp4?_=1" type="video/mp4" />
                    Su navegador no soporta el tag de video.
                  </video>
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <p className="text-lg">
                  Curso INTERVENCION POLICIAL Y COMBATE CUERPO A CUERPO, impartido por nuestro Departamento en el mes de Agosto a efectivos de la LEGION ESPAÑOLA, en el IV TERCIO con sede en RONDA (MALAGA).
                </p>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-bold text-lg">Convocatoria para el Curso de Monitor Nacional de Grappling Policial.</p>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
                    <Link to="/curso-legion" className="text-white">VER MÁS EN: MONITOR NACIONAL GRAPPLING POLICIAL</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Próximos Cursos Notice */}
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
