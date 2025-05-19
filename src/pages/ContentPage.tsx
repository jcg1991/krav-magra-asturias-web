
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/courses/CourseCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ContentPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const totalPages = 10;
  const currentPage = parseInt(pageNumber || '1');
  
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    
    if (page === 1) {
      navigate('/');
    } else {
      navigate(`/page/${page}`);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">
          Contenido Adicional - Página {pageNumber}
        </h1>
        
        {currentPage === 2 && (
          <>
            <CourseCard title="CURSO DE COMBATE, INTERVENCIÓN TÁCTICAS POLICIALES ESPECIALES LEGIÓN EXTRANJERA FRANCESA">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    src="http://bootcampspain.es/wp-content/uploads/CURSO-ESPECIAL-EN-LA-LEGION-EXTRANJERA-FRANCESA.mp4?_=1"
                  >
                    Tu navegador no soporta el elemento de vídeo.
                  </video>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">
                    Curso especial de tácticas policiales avanzadas impartido en colaboración con la Legión Extranjera Francesa. 
                    Este programa de entrenamiento está diseñado para profesionales de seguridad que buscan mejorar sus 
                    habilidades en intervenciones tácticas especiales y situaciones de combate.
                  </p>
                </div>
              </div>
            </CourseCard>
            
            {/* New Campus Marcial Course */}
            <CourseCard title="XV Campus de Artes Marciales y Deportes de Contacto «Ciudad de Oviedo»">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/f2df6b52-6797-45e3-847f-2b2ab956e284.png"
                    alt="Artes Marciales y Deportes de Contacto"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">
                    <strong>Fecha:</strong> 1,2 y 3 de Marzo de 2024
                  </p>
                  <p className="text-gray-700">
                    <strong>Horario:</strong> Viernes de 09.30 h en adelante, hasta Domingo a las 14h
                  </p>
                  <p className="text-gray-700">
                    <strong>Plazas:</strong> 20 (por riguroso orden de inscripción)
                  </p>
                  <p className="text-gray-700">
                    <strong>Lugar:</strong> Oviedo (Se comunicará a los inscritos)
                  </p>
                  <p className="text-gray-700">
                    <strong>Precio:</strong> 150 euros (Para inscribirse ha de hacerse el importe del ingreso del curso en la cuenta a nombre de OVIEPOL: ES 94 2100 7995 15 0200031149 de LA CAIXA indicando nombre y apellidos y a continuación la palabra CAMPUS. Luego se ha de enviar un mail de confirmación a formación@defensapolicial.es indicando Nombre y apellidos y que ha realizado el ingreso. La no asistencia al curso implicará la pérdida de la reserva.
                  </p>
                  <p className="text-gray-700">
                    <strong>Información e Inscripciones:</strong> Tf: 650063640 y 655478818, formacion@defensapolicial.es
                  </p>
                  <p className="text-gray-700">
                    <strong>Titulación:</strong> Diploma Expedido con todas las especialidades. Este curso es computable como créditos para la obtención de las TITULACIONES OFICIALES de Especialista en Combate Cuerpo a Cuerpo, Defensa Personal Policial, Sambo-Defensa Personal y Defensa Personal Femenina (En sus 3 Niveles: BASICO, SUPERIOR Y TECNICO)., así como para pase de grado de cinturones y danés.
                  </p>
                  <p className="text-gray-700">
                    <strong>Requisitos:</strong> Todos los participantes deben aportar fotocopia del DNI y Fotocopia de Seguro médico (Tarjeta seguridad social, Adeslas, Caser…)
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="http://bootcampspain.es/wp-content/uploads/CAMPUS-MARCIAL-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    VER MÁS EN: CAMPUS MARCIAL 2024
                  </a>
                </div>
              </div>
            </CourseCard>
            
            {/* New Intervención y Tácticas Policiales Course */}
            <CourseCard title="INTERVENCION Y TACTICAS POLICIALES EN INMUEBLES Y ZONAS URBANIZADAS (Exteriores e Interiores)">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/2cdb22d5-289c-40eb-9341-ee7fc08ed113.png"
                    alt="Tácticas Policiales en Inmuebles y Zonas Urbanizadas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">
                    <strong>Fecha:</strong> 5 Y 6 de Diciembre 2023
                  </p>
                  <p className="text-gray-700">
                    <strong>Lugar:</strong> (Oviedo) – ESPAÑA, se informará a los inscritos.
                  </p>
                  <p className="text-gray-700">
                    <strong>Horario:</strong><br/>
                    Día 5: 10 a 14 h y 16 a final de programa (20,22 h)<br/>
                    Dia 6: 10 a 14 y 16 a 20 h
                  </p>
                  <p className="text-gray-700">
                    <strong>Precio:</strong><br/>
                    Miembros de CISPEAR: 160 €<br/>
                    Miembros IPA acreditados: 170 €<br/>
                    Precio resto personas: 190 €
                  </p>
                  <p className="text-gray-700">
                    <strong>Diploma/Certificado:</strong> Oficial y baremable en méritos, expedido por la Federación*
                  </p>
                  <p className="text-gray-700">
                    <strong>N.º Plazas:</strong> 20, por riguroso orden de Inscripción.
                  </p>
                  <p className="text-gray-700">
                    <strong>Información/inscripciones:</strong><br/>
                    Tfno.: 657845573 y 625377602<br/>
                    E-Mail: formacion@defensapolicial.es
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="http://bootcampspain.es/wp-content/uploads/CURSO-PROGRESIONES-INMUEBLES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    VER MÁS EN: CURSO PROGRESIONES INMUEBLES
                  </a>
                </div>
              </div>
            </CourseCard>
          </>
        )}
        
        {currentPage !== 2 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Contenido adicional - Página {pageNumber}</h2>
            <p className="mb-4">
              Esta es la página {pageNumber} del contenido adicional. Aquí puedes añadir más contenido según necesites.
            </p>
            
            {/* Área para subir y mostrar contenido adicional */}
            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 mb-6">
              <p className="text-center text-gray-500">
                Espacio para contenido adicional - Página {pageNumber}
              </p>
            </div>
          </div>
        )}
        
        {/* Paginación */}
        <div className="w-full mt-8 bg-gray-100 rounded-lg shadow-sm p-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} 
                  className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink 
                    isActive={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)} 
                  className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </Layout>
  );
};

export default ContentPage;
