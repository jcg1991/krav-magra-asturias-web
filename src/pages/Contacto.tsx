
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Mensaje enviado correctamente');
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Formulario de Contacto</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <Input id="nombre" placeholder="Tu nombre" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            
            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <Input id="asunto" placeholder="Asunto del mensaje" required />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Tu mensaje (opcional)</label>
              <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" className="h-32" />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar Mensaje</Button>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Información de Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h3 className="font-semibold">Dirección de contacto:</h3>
                <p>Federación de Lucha del Principado de Asturias.- TFN 985331721</p>
                <p>C/Luis Adaro Ruiz-Falcó</p>
                <p>33203–Gijón (Asturias)</p>
                <p>ESPAÑA</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h3 className="font-semibold">Teléfono:</h3>
                <p>655478818</p>
                <h3 className="font-semibold mt-2">Móvil:</h3>
                <p>655478818</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p>formacion@defensapolicial.es</p>
                <p className="text-sm mt-2">Envienos un correo indicando su nombre, apellidos y dirección de correo electrónico donde quiera que se le envíe la información.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <div>
                <h3 className="font-semibold">Facebook:</h3>
                <a href="http://www.facebook.com/defensapolicial.intervencion?fref=ts" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  www.facebook.com/defensapolicial.intervencion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Información adicional</h2>
        <p className="text-sm">
          Nuestros Cursos son impartidos por Profesionales de la Defensa y la Seguridad y nuestras Titulaciones, certificados...son
          OFICIALES y BAREMABLES EN MERITOS tanto para las FF.Y CC. de Seguridad y Ejército como para otro tipo de administración.
        </p>
        <p className="text-xs mt-4 text-gray-500">
          *A los efectos previstos en la Ley Orgánica 15/1999 de 13 de diciembre, sobre la protección de datos de carácter personal,
          se le informa que los datos personales proporcionados se incorporarán (o actualizarán) a los ficheros del Departamento de
          Krav Maga de la Federación de Luchas Olímpicas y D.A. del Principado de Asturias. La finalidad del tratamiento de los datos
          será la de realizar los servicios de información de Cursos, incorporación a las actividades propias del Departamento, así
          como la realización de estudios estadísticos. Vd. Tiene derecho al acceso, rectificación, cancelación y oposición en los
          términos previstos en la ley, que podrá ejercitar mediante correo electrónico dirigido al responsable de los mismos en la
          siguiente dirección E-Mail: formacion@defensapolicial.es
        </p>
      </div>
    </Layout>
  );
};

export default Contacto;
