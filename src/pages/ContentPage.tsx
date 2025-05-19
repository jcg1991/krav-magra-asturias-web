
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
            
            {/* New COMIENZO CLASES KRAV MAGA Course */}
            <CourseCard title="COMIENZO CLASES KRAV MAGA 2023-2024">
              <div className="space-y-4">
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700 font-bold text-lg">
                    COMIENZO DE CLASES EL JUEVES DÍA 7 DE SEPTIEMBRE
                  </p>
                  <p className="text-gray-700">
                    <strong>Turno mañanas:</strong> Lunes y Viernes de 11.30 a 12.45 h
                  </p>
                  <p className="text-gray-700">
                    <strong>Turno tardes:</strong> Lunes y jueves de 20.30 a 21.50 h
                  </p>
                  <p className="text-gray-700">
                    <strong>Precio:</strong> 40 eur / mes y 75 eur / año de la Licencia Federativa
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2">Documentación y requisitos:</h3>
                    <p className="text-gray-700 mb-2">El primer día de clase para poder entrenar se deberá aportar (nuevos alumnos):</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1 fotografía tamaño carnet con nombre y apellidos escrito atrás</li>
                      <li>Pagar la cuota mensual</li>
                      <li>Abonar las tasas de la Licencia Federativa</li>
                      <li>Vestimenta: Durante el primer mes el alumno podrá entrenar con ropa deportiva y camiseta. Pasado este tiempo es obligatorio estar debidamente uniformado con la Uniformidad de Krav Maga oficial de la federación.</li>
                      <li>Menores: Sus padres, representantes legales o tutores deberán firmar el consentimiento para poder realizar la actividad.</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mt-3">
                    <strong>Solicitud de plaza:</strong> deberá enviar un e-mail a formacion@defensapolicial.es donde se indique nombre, apellidos y tfn de contacto y que se desea reservar plaza para asistir a las clases de Krav Maga.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="http://bootcampspain.es/wp-content/uploads/CLASES-REGULARES-KRAV-MAGA-2023-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    VER MÁS EN: CLASES REGULARES KRAV MAGA 2023-2024
                  </a>
                </div>
              </div>
            </CourseCard>
            
            {/* New KRAV MAGA BOOT CAMP Course */}
            <CourseCard title="KRAV MAGA BOOT CAMP 2023">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    src="http://bootcampspain.es/wp-content/uploads/KRAV-MAGA-BOOT-CAMP-2023-INSCRIBETE.mp4?_=2"
                  >
                    Tu navegador no soporta el elemento de vídeo.
                  </video>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 text-lg font-semibold">
                    Inscríbete ya, antes de que sea demasiado tarde, en el: KRAV MAGA BOOT CAMP 2023
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">
                    Más de la mitad de las plazas ya cubiertas.
                  </p>
                </div>
              </div>
            </CourseCard>
            
            {/* New STAGE NACIONAL KRAV MAGA Course */}
            <CourseCard title="STAGE NACIONAL KRAV MAGA">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/7bb21c1f-e940-41fa-afd0-28879f6851a6.png"
                    alt="Stage Nacional Krav Maga"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">
                    <strong>Fecha:</strong> 23,24,25,26,27 y 28 de Junio de 2023
                  </p>
                  <p className="text-gray-700">
                    <strong>Lugar:</strong> (León) -ESPAÑA Se informará a los inscritos
                  </p>
                  <p className="text-gray-700">
                    <strong>Horario:</strong> Régimen de internado
                  </p>
                  <p className="text-gray-700">
                    <strong>Precio:</strong> 490 eur (inscripciones antes del 25 de Mayo) – 620 eur (inscripciones posteriores al 25 de Mayo)
                  </p>
                  <p className="text-gray-700">
                    <strong>Diploma/certificado:</strong> Oficial y baremable en méritos, expedido por la Federación*
                  </p>
                  <p className="text-gray-700">
                    <strong>N.º Plazas:</strong> 30, por riguroso orden de Inscripción.
                  </p>
                  <p className="text-gray-700">
                    <strong>Información/inscripciones:</strong><br/>
                    Tfno.: 625 377 602 – 655 478 8818<br/>
                    E-Mail: formacion@defensapolicial.es<br/>
                    Web: www.defensapolicial.es
                  </p>
                  <p className="text-gray-700 italic">
                    *El curso será válido para obtener Titulaciones de Especialista en diferentes especialidades.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="http://bootcampspain.es/wp-content/uploads/STAGE-NACIONAL-KRAV-MAGA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    VER MÁS EN: STAGE NACIONAL KRAV MAGA
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
