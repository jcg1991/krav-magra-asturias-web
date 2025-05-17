
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="h-48 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369184.2849523181!2d-6.415935155649077!3d43.36157566261248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368c980a1c939f%3A0x3134440eada8e6a8!2sAsturias!5e0!3m2!1sen!2ses!4v1716675300695!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><Link to="/krav-maga" className="hover:text-primary-foreground/70">Krav Maga</Link></li>
              <li><Link to="/clases" className="hover:text-primary-foreground/70">Clases</Link></li>
              <li><Link to="/areas" className="hover:text-primary-foreground/70">Áreas</Link></li>
              <li><Link to="/tecnicas" className="hover:text-primary-foreground/70">Técnicas</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: info@kravmaga-asturias.es</li>
              <li>Teléfono: +34 XXX XXX XXX</li>
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
