
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative">
      <div className="header-image h-60 w-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/6e6a574a-0d2a-430f-a06f-17c7c568f105.png')" }}></div>
      <nav className="bg-primary shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to="/" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  INICIO
                </Link>
                <Link to="/informate" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  INFORMATE
                </Link>
                <Link to="/krav-maga" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  KRAV MAGA
                </Link>
                <Link to="/clases" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CLASES
                </Link>
                <Link to="/areas" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  AREAS
                </Link>
                <Link to="/tecnicas" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  TECNICAS
                </Link>
                <Link to="/cursos" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CURSOS
                </Link>
                <Link to="/calendario" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CALENDARIO
                </Link>
                <Link to="/contacto" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CONTACTO
                </Link>
                <Link to="/enlaces" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  ENLACES
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
