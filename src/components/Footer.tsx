
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="h-48 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.0187251582413!2d-5.651247371509968!3d43.53128767109136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36660f0b23c5bb%3A0x2168854b26ab4ee!2sC.%20Luis%20Adaro%20Ruiz-Falc%C3%B3%2C%2033203%20Gij%C3%B3n%2C%20Asturias!5e0!3m2!1sen!2ses!4v1716824133581!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><Link to="/krav-maga" className="hover:text-primary-foreground/70">Krav Maga</Link></li>
              <li><Link to="/clases" className="hover:text-primary-foreground/70">Clases</Link></li>
              <li><Link to="/areas" className="hover:text-primary-foreground/70">Áreas</Link></li>
              <li><Link to="/tecnicas" className="hover:text-primary-foreground/70">Técnicas</Link></li>
              <li><Link to="/calendario" className="hover:text-primary-foreground/70">Calendario</Link></li>
              <li><Link to="/contacto" className="hover:text-primary-foreground/70">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: formacion@defensapolicial.es</li>
              <li>Teléfono: +34 655 478 818</li>
              <li><Link to="/contacto" className="text-primary-foreground hover:underline">Formulario de contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Krav Maga Asturias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
