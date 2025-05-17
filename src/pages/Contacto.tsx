
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacto = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Formulario de Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <Input id="telefono" placeholder="Tu teléfono" />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" className="h-32" />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar Mensaje</Button>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Información de Contacto</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Dirección:</h3>
              <p>Calle Principal 123, 33001 Oviedo, Asturias</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Teléfono:</h3>
              <p>+34 XXX XXX XXX</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Email:</h3>
              <p>info@kravmaga-asturias.es</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Horario de Oficina:</h3>
              <p>Lunes a Viernes: 9:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
