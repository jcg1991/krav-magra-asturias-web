
import React, { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Layout from '../components/Layout';
import { Calendar } from '@/components/ui/calendar';

interface Evento {
  id: number;
  titulo: string;
  fecha: Date;
  descripcion: string;
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: 'Curso Básico de Krav Maga',
    fecha: new Date(2025, 5, 20), // 20 de Junio de 2025
    descripcion: 'Introducción a las técnicas básicas de Krav Maga para principiantes.'
  },
  {
    id: 2,
    titulo: 'Seminario de Defensa contra Armas',
    fecha: new Date(2025, 5, 25), // 25 de Junio de 2025
    descripcion: 'Aprende técnicas avanzadas de defensa contra cuchillos y armas de fuego.'
  },
  {
    id: 3,
    titulo: 'Entrenamiento de Combate Cuerpo a Cuerpo',
    fecha: new Date(2025, 6, 5), // 5 de Julio de 2025
    descripcion: 'Técnicas de combate cuerpo a cuerpo y sparring controlado.'
  },
  {
    id: 4,
    titulo: 'Certificación Nivel 1',
    fecha: new Date(2025, 6, 15), // 15 de Julio de 2025
    descripcion: 'Examen para la certificación de nivel 1 de Krav Maga.'
  }
];

const Calendario = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDateEvents, setSelectedDateEvents] = useState<Evento[]>([]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      // Filtrar eventos para la fecha seleccionada
      const eventsOnSelectedDate = eventos.filter(evento => 
        evento.fecha.getDate() === selectedDate.getDate() &&
        evento.fecha.getMonth() === selectedDate.getMonth() &&
        evento.fecha.getFullYear() === selectedDate.getFullYear()
      );
      
      setSelectedDateEvents(eventsOnSelectedDate);
    } else {
      setSelectedDateEvents([]);
    }
  };

  // Función para marcar fechas con eventos
  const isDayWithEvent = (day: Date) => {
    return eventos.some(evento => 
      evento.fecha.getDate() === day.getDate() &&
      evento.fecha.getMonth() === day.getMonth() &&
      evento.fecha.getFullYear() === day.getFullYear()
    );
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Calendario de Cursos y Eventos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Selecciona una fecha</h2>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                locale={es}
                className="p-3 pointer-events-auto border rounded-md"
                modifiers={{
                  event: (day) => isDayWithEvent(day),
                }}
                modifiersClassNames={{
                  event: "bg-primary text-primary-foreground font-bold",
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              {date ? (
                <>Eventos para el {format(date, "d 'de' MMMM 'de' yyyy", { locale: es })}</>
              ) : (
                "Selecciona una fecha para ver eventos"
              )}
            </h2>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map(evento => (
                  <div key={evento.id} className="border-l-4 border-primary pl-4 py-2">
                    <h3 className="text-lg font-medium">{evento.titulo}</h3>
                    <p className="text-gray-600">{evento.descripcion}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                {date ? "No hay eventos programados para esta fecha." : "Selecciona una fecha en el calendario para ver los eventos disponibles."}
              </p>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
          <div className="space-y-4">
            {eventos
              .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
              .map(evento => (
                <div key={evento.id} className="border-b pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{evento.titulo}</h3>
                    <p className="text-gray-600">{evento.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {format(evento.fecha, "d MMM yyyy", { locale: es })}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendario;
