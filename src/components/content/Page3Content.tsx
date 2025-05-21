
import React from 'react';
import GalaAnualCourse from '../courses/GalaAnualCourse';
import CruzAniversarioCourse from '../courses/CruzAniversarioCourse';
import CursoKubotanGalaCourse from '../courses/CursoKubotanGalaCourse';
import ClasesKravMaga2022Course from '../courses/ClasesKravMaga2022Course';
import CursoSwatTacticasCourse from '../courses/CursoSwatTacticasCourse';
import CursoCQBIsraeliCourse from '../courses/CursoCQBIsraeliCourse';

const Page3Content = () => {
  return (
    <div className="space-y-8">
      <GalaAnualCourse />
      <CruzAniversarioCourse />
      <CursoKubotanGalaCourse />
      <ClasesKravMaga2022Course />
      <CursoSwatTacticasCourse />
      <CursoCQBIsraeliCourse />
    </div>
  );
};

export default Page3Content;
