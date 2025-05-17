
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
  
  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Implementar la búsqueda en la página
      const searchText = searchTerm.toLowerCase();
      const bodyText = document.body.innerText.toLowerCase();
      
      if (bodyText.includes(searchText)) {
        // Crear un resaltado temporal de las coincidencias
        const textNodes = [];
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        );

        let node;
        while (node = walker.nextNode()) {
          if (node.textContent && node.textContent.toLowerCase().includes(searchText)) {
            textNodes.push(node);
          }
        }

        // Resaltar las coincidencias
        const highlightClass = 'bg-yellow-300';
        const highlights = [];

        textNodes.forEach(textNode => {
          const text = textNode.textContent || '';
          const parent = textNode.parentNode;
          
          if (parent && text.toLowerCase().includes(searchText)) {
            const fragment = document.createDocumentFragment();
            let currentText = text;
            let lastIndex = 0;
            const regex = new RegExp(searchText, 'gi');
            let match;
            
            while ((match = regex.exec(text)) !== null) {
              // Texto antes de la coincidencia
              if (match.index > lastIndex) {
                fragment.appendChild(
                  document.createTextNode(currentText.substring(lastIndex, match.index))
                );
              }
              
              // Texto de la coincidencia resaltado
              const highlightSpan = document.createElement('span');
              highlightSpan.classList.add(highlightClass);
              highlightSpan.textContent = match[0];
              fragment.appendChild(highlightSpan);
              highlights.push(highlightSpan);
              
              lastIndex = regex.lastIndex;
            }
            
            // Texto restante después de la última coincidencia
            if (lastIndex < currentText.length) {
              fragment.appendChild(
                document.createTextNode(currentText.substring(lastIndex))
              );
            }
            
            if (parent) {
              parent.replaceChild(fragment, textNode);
            }
          }
        });

        // Desplazarse al primer resultado
        if (highlights.length > 0) {
          highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Eliminar los resaltados después de unos segundos
          setTimeout(() => {
            window.location.reload(); // Manera sencilla de restaurar la página
          }, 3000);
        }
      }
    }
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
        
        {/* Buscador con funcionalidad - Changed input type to text to remove the native X button */}
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Buscar..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit" 
            className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-primary hover:text-primary-dark"
          >
            Buscar
          </button>
        </form>
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
            <span>{openSubmenus["programa-nacional"] ? "−" : "+"}</span>
          </button>
          
          {openSubmenus["programa-nacional"] && (
            <div>
              {/* PROGRAMA TECNICO */}
              <div className="ml-4 border-l-2 border-gray-200">
                <button
                  onClick={() => toggleSubmenu("programa-tecnico")}
                  className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
                >
                  <span>PROGRAMA TÉCNICO</span>
                  <span>{openSubmenus["programa-tecnico"] ? "−" : "+"}</span>
                </button>
                
                {openSubmenus["programa-tecnico"] && (
                  <div className="pl-4">
                    <div className="py-1 px-4 text-sm font-medium text-gray-700">HASTA C.N. 3º DAN</div>
                    <a href="http://bootcampspain.es/wp-content/uploads/DPPCN1DANDPPCOMPLETO.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1er DAN</a>
                    <a href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-2-DAN-DPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2º DAN</a>
                    <a href="http://bootcampspain.es/wp-content/uploads/PROGRAMA3DANDPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3er DAN</a>
                  </div>
                )}
              </div>
              
              {/* KATAS DE DEFENSA */}
              <div className="ml-4 border-l-2 border-gray-200">
                <button
                  onClick={() => toggleSubmenu("katas")}
                  className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
                >
                  <span>KATAS DE DEFENSA PERSONAL POLICIAL</span>
                  <span>{openSubmenus["katas"] ? "−" : "+"}</span>
                </button>
                
                {openSubmenus["katas"] && (
                  <div className="pl-4">
                    <a href="http://bootcampspain.es/wp-content/uploads/1KATADPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 1era KATA</a>
                    <a href="https://defensapolicial.es/wp-content/uploads/2a-KATA-DPP.pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 2ª KATA</a>
                    <a href="https://defensapolicial.es/wp-content/uploads/3a-KATA-DPP..pdf" target="_blank" rel="noopener noreferrer" className="block py-1 px-6 text-sm text-blue-600 hover:underline">Descargar 3era KATA</a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
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
