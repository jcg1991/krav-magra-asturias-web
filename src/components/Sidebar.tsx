import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type SubmenuType = 'programa-nacional' | 'programa-tecnico' | 'katas' | null;

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState<SubmenuType>("programa-nacional");
  
  const toggleSubmenu = (submenu: SubmenuType) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };
  
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <div className="px-4 py-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Buscar..."
            className="pl-10 w-full"
          />
        </div>
      </div>
      
      <div className="mt-2">
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">CURSOS</div>
        
        {/* PROGRAMA NACIONAL D. P. POLICIAL */}
        <div>
          <button
            onClick={() => toggleSubmenu("programa-nacional")}
            className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
          >
            <span>PROGRAMA NACIONAL D. P. POLICIAL</span>
            <span>{openSubmenu === "programa-nacional" ? "−" : "+"}</span>
          </button>
          
          {openSubmenu === "programa-nacional" && (
            <div>
              {/* PROGRAMA TECNICO */}
              <div className="ml-4 border-l-2 border-gray-200">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu("programa-tecnico");
                  }}
                  className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
                >
                  <span>PROGRAMA TÉCNICO</span>
                  <span>{openSubmenu === "programa-tecnico" ? "−" : "+"}</span>
                </button>
                
                {openSubmenu === "programa-tecnico" && (
                  <div className="pl-4">
                    <div className="py-1 px-4 text-sm font-medium text-gray-700">HASTA C.N. 3º DAN</div>
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1er DAN</a>
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2º DAN</a>
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3er DAN</a>
                  </div>
                )}
              </div>
              
              {/* KATAS DE DEFENSA */}
              <div className="ml-4 border-l-2 border-gray-200">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu("katas");
                  }}
                  className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
                >
                  <span>KATAS DE DEFENSA PERSONAL POLICIAL</span>
                  <span>{openSubmenu === "katas" ? "−" : "+"}</span>
                </button>
                
                {openSubmenu === "katas" && (
                  <div className="pl-4">
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1era KATA</a>
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2ª KATA</a>
                    <a href="#" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3era KATA</a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Add spacing between sections */}
        <div className="my-3"></div>
        
        {/* Other Courses */}
        <div className="px-4 py-1">
          <Link to="/curso-inmuebles" className="sidebar-menu-item">
            CURSO APERTURA INTERVENCIONES EN INMUEBLES
          </Link>
        </div>
        
        <div className="px-4 py-1">
          <Link to="/curso-autoproteccion" className="sidebar-menu-item">
            CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR
          </Link>
        </div>
        
        <div className="px-4 py-1">
          <Link to="/cursos-especiales" className="sidebar-menu-item">
            CURSOS ESPECIALES 2025
          </Link>
        </div>
        
        <div className="px-4 py-1">
          <Link to="/calendario" className="sidebar-menu-item">
            CALENDARIO DE CURSOS
          </Link>
        </div>
        
        <div className="px-4 py-1">
          <Link to="/curso-inmuebles-urbano" className="sidebar-menu-item">
            CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
          </Link>
        </div>
        
        <div className="px-4 py-1">
          <Link to="/curso-legion" className="sidebar-menu-item text-xs">
            CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
