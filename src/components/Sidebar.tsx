import React, { useState } from 'react';
import SidebarSearch from './sidebar/SidebarSearch';
import SidebarSubmenu from './sidebar/SidebarSubmenu';
import SidebarMenuItem from './sidebar/SidebarMenuItem';
import './sidebar/sidebar.css';

const Sidebar = () => {
  // Track multiple submenus with an object
  const [openSubmenus, setOpenSubmenus] = useState<{
    [key: string]: boolean;
  }>({
    "programa-nacional": true,
    "programa-tecnico": false,
    "katas": false
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
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
        
        {/* Buscador con funcionalidad */}
        <SidebarSearch 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
        />
      </div>
      
      <div className="mt-2">
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">CURSOS</div>
        
        {/* PROGRAMA NACIONAL D. P. POLICIAL */}
        <SidebarSubmenu 
          title="PROGRAMA NACIONAL D. P. POLICIAL"
          isOpen={openSubmenus["programa-nacional"]}
          toggleSubmenu={() => toggleSubmenu("programa-nacional")}
        >
          {/* PROGRAMA TECNICO */}
          <SidebarSubmenu 
            title="PROGRAMA TÉCNICO"
            isOpen={openSubmenus["programa-tecnico"]}
            toggleSubmenu={() => toggleSubmenu("programa-tecnico")}
          >
            <div className="pl-4">
              <div className="py-1 px-4 text-sm font-medium text-gray-700">HASTA C.N. 3º DAN</div>
              <a href="http://bootcampspain.es/wp-content/uploads/DPPCN1DANDPPCOMPLETO.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1er DAN</a>
              <a href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-2-DAN-DPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2º DAN</a>
              <a href="http://bootcampspain.es/wp-content/uploads/PROGRAMA3DANDPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3er DAN</a>
            </div>
          </SidebarSubmenu>
          
          {/* KATAS DE DEFENSA */}
          <SidebarSubmenu 
            title="KATAS DE DEFENSA PERSONAL POLICIAL"
            isOpen={openSubmenus["katas"]}
            toggleSubmenu={() => toggleSubmenu("katas")}
          >
            <div className="pl-4">
              <a href="http://bootcampspain.es/wp-content/uploads/1KATADPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1era KATA</a>
              <a href="https://defensapolicial.es/wp-content/uploads/2a-KATA-DPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2ª KATA</a>
              <a href="https://defensapolicial.es/wp-content/uploads/3a-KATA-DPP..pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3era KATA</a>
            </div>
          </SidebarSubmenu>
        </SidebarSubmenu>
        
        {/* Other Courses */}
        <SidebarMenuItem to="/curso-inmuebles">
          CURSO APERTURA INTERVENCIONES EN INMUEBLES
        </SidebarMenuItem>
        
        <SidebarMenuItem to="/curso-autoproteccion">
          CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR
        </SidebarMenuItem>
        
        <SidebarMenuItem to="/cursos-especiales">
          CURSOS ESPECIALES 2025
        </SidebarMenuItem>
        
        <SidebarMenuItem to="/curso-inmuebles-urbano">
          CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
        </SidebarMenuItem>
        
        <SidebarMenuItem to="/curso-legion" className="text-xs">
          CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA
        </SidebarMenuItem>
      </div>
    </aside>
  );
};

export default Sidebar;
