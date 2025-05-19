
import React, { useState } from 'react';
import SearchBar from './sidebar/SearchBar';
import SubmenuItem from './sidebar/SubmenuItem';
import MenuLink from './sidebar/MenuLink';
import SidebarNavLink from './sidebar/SidebarNavLink';

const Sidebar = () => {
  // Track multiple submenus with an object
  const [openSubmenus, setOpenSubmenus] = useState<{
    [key: string]: boolean;
  }>({
    "programa-nacional": true,
    "programa-tecnico": false,
    "katas": false
  });
  
  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };
  
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <div className="px-4 py-5">
        {/* Logo encima del buscador */}
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/1f06ec5f-c163-4470-baca-abdb5a7bf145.png" 
            alt="Logo Internacional Police Association" 
            className="w-40 h-auto"
          />
        </div>
        
        {/* Search bar component */}
        <SearchBar />
      </div>
      
      <div className="mt-2">
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">CURSOS</div>
        
        {/* PROGRAMA NACIONAL D. P. POLICIAL */}
        <SubmenuItem 
          title="PROGRAMA NACIONAL D. P. POLICIAL"
          isOpen={openSubmenus["programa-nacional"]}
          onToggle={() => toggleSubmenu("programa-nacional")}
        >
          {/* PROGRAMA TECNICO */}
          <div className="ml-4 border-l-2 border-gray-200">
            <SubmenuItem
              title="PROGRAMA TÉCNICO"
              isOpen={openSubmenus["programa-tecnico"]}
              onToggle={() => toggleSubmenu("programa-tecnico")}
            >
              <div className="pl-4">
                <div className="py-1 px-4 text-sm font-medium text-gray-700">HASTA C.N. 5º DAN</div>
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/DPPCN1DANDPPCOMPLETO.pdf">
                  Descargar 1er DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-2-DAN-DPP.pdf">
                  Descargar 2º DAN
                </MenuLink>
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/PROGRAMA3DANDPP.pdf">
                  Descargar 3er DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-4o-DAN-BPE.pdf">
                  Descargar 4º DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-5o-DAN-DPP.pdf">
                  Descargar 5º DAN
                </MenuLink>
              </div>
            </SubmenuItem>
          </div>
          
          {/* KATAS DE DEFENSA */}
          <div className="ml-4 border-l-2 border-gray-200">
            <SubmenuItem
              title="KATAS DE DEFENSA PERSONAL POLICIAL"
              isOpen={openSubmenus["katas"]}
              onToggle={() => toggleSubmenu("katas")}
            >
              <div className="pl-4">
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/1KATADPP.pdf">
                  Descargar 1era KATA
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/2a-KATA-DPP.pdf">
                  Descargar 2ª KATA
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/3a-KATA-DPP..pdf">
                  Descargar 3era KATA
                </MenuLink>
              </div>
            </SubmenuItem>
          </div>
        </SubmenuItem>
        
        {/* Krav Maga Boot Camp Image */}
        <div className="px-4 py-3">
          <img 
            src="/lovable-uploads/f9d6ae12-56ee-4019-a1ae-24e414ad4504.png" 
            alt="Krav Maga Boot Camp" 
            className="w-full h-auto rounded-md shadow-sm" 
          />
        </div>
        
        {/* Other Courses */}
        <SidebarNavLink to="/cursos" scrollToTop={true}>
          CURSO APERTURA INTERVENCIONES EN INMUEBLES
        </SidebarNavLink>
        
        <SidebarNavLink to="/curso-inmuebles-urbano" id="curso-inmuebles-urbano" scrollToTop={true}>
          CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-autoproteccion">
          CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos-especiales">
          CURSOS ESPECIALES 2025
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-legion" className="text-xs">
          CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-baston-gala" className="text-xs">
          CURSO BASTÓN POLICIAL Y CENA GALA 2024
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-contraterrorismo" className="text-xs">
          CURSO CONTRATERRORISMO ISRAELÍ
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-entrenador-kravmaga" className="text-xs">
          CURSO ENTRENADOR NACIONAL KRAV MAGA
        </SidebarNavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
