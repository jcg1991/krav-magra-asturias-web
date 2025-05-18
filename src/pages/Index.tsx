import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold text-primary">Bienvenidos a Krav Maga Asturias</h1>
        
        {/* Introduction Section */}
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
        
        {/* Features Grid */}
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
        
        {/* Latest News Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">ÚLTIMAS NOTICIAS</h2>
          <div className="space-y-4">
            {/* News Item 1: Curso Aperturas */}
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
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSO APERTURAS INMUEBLES</Link></p>
              </div>
            </div>
            
            {/* News Item 2: Curso Autoprotección */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium">CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <div className="grid grid-cols-2 gap-2">
                  <img src="/lovable-uploads/c383a2e7-3fd4-48cb-8b56-343da38ae2b1.png" alt="Autoprotección del hogar" className="rounded-lg max-w-full h-auto" />
                  <img alt="Defensa personal en el hogar" className="rounded-lg max-w-full h-auto" src="/lovable-uploads/e77473a6-1550-4e5f-934b-11f21beab648.jpg" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p><strong>FECHA:</strong> 24 Y 25 DE MAYO DE 2025</p>
                <p><strong>HORARIO:</strong> Sábado: 10 a 14h y 14 a 20h / Domingo: 9.30 a 15h</p>
                <p><strong>PLAZAS:</strong> 15</p>
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/curso-autoproteccion" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSO AUTOPROTECCION CIVILES</Link></p>
              </div>
            </div>
            
            {/* News Item 3: Cursos Especiales 2025 */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-center">CURSOS ESPECIALES 2025</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <img src="/lovable-uploads/296e4e54-8b3f-4aac-84cc-ccd42f280f77.png" alt="Calendario Cursos Especiales 2025" className="rounded-lg max-w-full h-auto mb-2" />
              </div>
              <div className="mt-4 space-y-2 text-center">
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos-especiales" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSOS ESPECIALES 2025</Link></p>
              </div>
            </div>

            {/* News Item 4: Curso Intervención en Inmuebles */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-center">CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <img src="/lovable-uploads/476d59f1-7e4a-4735-8d61-3912f94e1469.png" alt="Curso intervención en inmuebles" className="rounded-lg max-w-full h-auto mb-2" />
                <h4 className="text-center font-medium">CURSO APERTURA INTERVENCIONES EN INMUEBLES</h4>
                <p className="text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
              </div>
              <div className="mt-4 space-y-2">
                <p><strong>FECHA:</strong> 11, 12 DE ENERO DE 2025</p>
                <p><strong>DIPLOMA / CERTIFICADO:</strong> Oficial y Baremable</p>
                <p><strong>PLAZAS LIMITADAS:</strong></p>
                <p><strong>INFORMACIÓN / INSCRIPCIONES:</strong></p>
                <p>TFNO.: 655478818</p>
                <p>E-MAIL: formacion@defensapolicial.es</p>
                <p>www.defensapolicial.es</p>
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/curso-inmuebles-urbano" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS</Link></p>
              </div>
            </div>
            
            {/* NEWS ITEM 5: NEW - Curso Legion Española */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-center">CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <div className="grid grid-cols-1 gap-2">
                  <img src="/lovable-uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png" alt="Grappling Policial" className="rounded-lg max-w-full h-auto mb-3" />
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
              </div>
              <div className="mt-4 space-y-2">
                <p>Curso INTERVENCION POLICIAL Y COMBATE CUERPO A CUERPO, impartido por nuestro Departamento en el mes de Agosto a efectivos de la LEGION ESPAÑOLA, en el IV TERCIO con sede en RONDA (MALAGA).</p>
                <p><strong>Convocatoria para el Curso de Monitor Nacional de Grappling Policial.</strong></p>
                <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/curso-legion" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>MONITOR NACIONAL GRAPPLING POLICIAL</Link></p>
              </div>
            </div>
            
            {/* NEW ITEM: Curso Bastón Policial y Cena Gala 2024 */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-center">CURSO BASTÓN POLICIAL Y CENA GALA 2024</h3>
              <div className="flex flex-col items-center mt-3 mb-3">
                <div className="grid grid-cols-1 gap-4">
                  <img 
                    src="/lovable-uploads/75b4984a-a52f-4e45-a743-339ec427bd6f.png" 
                    alt="Cena de Gala Defensa Personal Policial Krav Maga" 
                    className="rounded-lg max-w-full h-auto mb-3"
                  />
                  <img 
                    src="/lovable-uploads/0908978a-560e-4b67-b07b-220dd9873c34.png" 
                    alt="Bastones Policiales" 
                    className="rounded-lg max-w-full h-auto max-h-64"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p>Información de estos 2 eventos. La gente que acuda al curso por precio del mismo le incluye la cena de Gala.</p>
                <p className="mt-4 font-bold text-center">VER MÁS EN:</p>
                <p className="text-center">
                  <a 
                    href="http://bootcampspain.es/wp-content/uploads/CURSO-BASTON-Y-GALA-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    CURSO BASTÓN Y GALA 2024
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};

export default Index;
