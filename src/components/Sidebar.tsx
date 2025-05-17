import React, { useState } from 'react';
import SidebarSearch from './sidebar/SidebarSearch';
import SidebarSubmenu from './sidebar/SidebarSubmenu';
import SidebarMenuItem from './sidebar/SidebarMenuItem';
import { searchInDocument } from '../utils/searchUtils';

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
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Use the search utility function
      const highlights = searchInDocument(searchTerm);
      
      // Scroll to the first result if found
      if (highlights.length > 0) {
        highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove the highlights after a delay
        setTimeout(() => {
          window.location.reload(); // Simple way to restore the page
        }, 3000);
      }
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchFocused(false);
  };
  
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <div className="px-4 py-5">
        {/* Logo above the search */}
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/1f06ec5f-c163-4470-baca-abdb5a7bf145.png" 
            alt="Logo Internacional Police Association" 
            className="w-40 h-auto"
          />
        </div>
        
        {/* Search component */}
        <SidebarSearch 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
          handleSearch={handleSearch}
          clearSearch={clearSearch}
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
              <SidebarMenuItem 
                to="http://bootcampspain.es/wp-content/uploads/DPPCN1DANDPPCOMPLETO.pdf" 
                isExternalLink={true}
              >
                Descargar 1er DAN
              </SidebarMenuItem>
              <SidebarMenuItem 
                to="https://defensapolicial.es/wp-content/uploads/PROGRAMA-2-DAN-DPP.pdf" 
                isExternalLink={true}
              >
                Descargar 2º DAN
              </SidebarMenuItem>
              <SidebarMenuItem 
                to="http://bootcampspain.es/wp-content/uploads/PROGRAMA3DANDPP.pdf" 
                isExternalLink={true}
              >
                Descargar 3er DAN
              </SidebarMenuItem>
            </div>
          </SidebarSubmenu>
          
          {/* KATAS DE DEFENSA */}
          <SidebarSubmenu
            title="KATAS DE DEFENSA PERSONAL POLICIAL"
            isOpen={openSubmenus["katas"]}
            toggleSubmenu={() => toggleSubmenu("katas")}
          >
            <div className="pl-4">
              <SidebarMenuItem 
                to="http://bootcampspain.es/wp-content/uploads/1KATADPP.pdf" 
                isExternalLink={true}
              >
                Descargar 1era KATA
              </SidebarMenuItem>
              <SidebarMenuItem 
                to="https://defensapolicial.es/wp-content/uploads/2a-KATA-DPP.pdf" 
                isExternalLink={true}
              >
                Descargar 2ª KATA
              </SidebarMenuItem>
              <SidebarMenuItem 
                to="https://defensapolicial.es/wp-content/uploads/3a-KATA-DPP..pdf" 
                isExternalLink={true}
              >
                Descargar 3era KATA
              </SidebarMenuItem>
            </div>
          </SidebarSubmenu>
        </SidebarSubmenu>
        
        {/* Other Courses */}
        <div className="px-4 py-1">
          <SidebarMenuItem to="/curso-inmuebles">
            CURSO APERTURA INTERVENCIONES EN INMUEBLES
          </SidebarMenuItem>
        </div>
        
        <div className="px-4 py-1">
          <SidebarMenuItem to="/curso-autoproteccion">
            CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR
          </SidebarMenuItem>
        </div>
        
        <div className="px-4 py-1">
          <SidebarMenuItem to="/cursos-especiales">
            CURSOS ESPECIALES 2025
          </SidebarMenuItem>
        </div>
        
        <div className="px-4 py-1">
          <SidebarMenuItem to="/curso-inmuebles-urbano">
            CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
          </SidebarMenuItem>
        </div>
        
        <div className="px-4 py-1">
          <SidebarMenuItem to="/curso-legion" className="text-xs">
            CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA
          </SidebarMenuItem>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
