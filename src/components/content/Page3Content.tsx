
import React from 'react';
import GalaAnualCourse from '../courses/GalaAnualCourse';
import CruzAniversarioCourse from '../courses/CruzAniversarioCourse';
import CursoKubotanGalaCourse from '../courses/CursoKubotanGalaCourse';

const Page3Content = () => {
  return (
    <div className="space-y-8">
      <GalaAnualCourse />
      <CruzAniversarioCourse />
      <CursoKubotanGalaCourse />
    </div>
  );
};

export default Page3Content;
