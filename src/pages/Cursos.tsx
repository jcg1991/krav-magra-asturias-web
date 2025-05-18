
import React from 'react';
import Layout from '../components/Layout';
import CursoInmuebles from '../components/courses/CursoInmuebles';
import CursoAutoproteccion from '../components/courses/CursoAutoproteccion';
import CursosEspeciales from '../components/courses/CursosEspeciales';
import CursoInmueblesUrbano from '../components/courses/CursoInmueblesUrbano';
import CursoLegion from '../components/courses/CursoLegion';
import ProximosCursos from '../components/courses/ProximosCursos';
import CursoBastonGala from '../components/courses/CursoBastonGala';
import CursoContraterrorismo from '../components/courses/CursoContraterrorismo';

const CursosPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Cursos Disponibles</h1>
        
        {/* Individual course components */}
        <CursoInmuebles />
        <CursoAutoproteccion />
        <CursosEspeciales />
        <CursoInmueblesUrbano />
        <CursoLegion />
        
        {/* New Baston and Gala course */}
        <CursoBastonGala />
        
        {/* New Contraterrorismo course */}
        <CursoContraterrorismo />
        
        {/* Próximos Cursos Notice */}
        <ProximosCursos />
      </div>
    </Layout>
  );
};

export default CursosPage;
