
import React from 'react';
import LegionExtranjeraFrancesaCourse from '../courses/LegionExtranjeraFrancesaCourse';
import CampusMarcialCourse from '../courses/CampusMarcialCourse';
import IntervencionTacticasCourse from '../courses/IntervencionTacticasCourse';
import ClasesKravMagaCourse from '../courses/ClasesKravMagaCourse';
import KravMagaBootCampCourse from '../courses/KravMagaBootCampCourse';
import StageNacionalKravMagaCourse from '../courses/StageNacionalKravMagaCourse';

const Page2Content = () => {
  return (
    <div className="space-y-8">
      <LegionExtranjeraFrancesaCourse />
      <CampusMarcialCourse />
      <IntervencionTacticasCourse />
      <ClasesKravMagaCourse />
      <KravMagaBootCampCourse />
      <StageNacionalKravMagaCourse />
    </div>
  );
};

export default Page2Content;
