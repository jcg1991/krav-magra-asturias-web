
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define event type
interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  description: string;
}

const CalendarioPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample events data
  const events: CalendarEvent[] = [
    {
      id: 1,
      title: "Curso de Defensa Personal Básico",
      date: new Date(2025, 5, 15), // June 15, 2025
      description: "Aprende técnicas básicas de defensa personal. Dirigido a principiantes."
    },
    {
      id: 2,
      title: "Seminario Avanzado de Krav Maga",
      date: new Date(2025, 5, 22), // June 22, 2025
      description: "Seminario intensivo para practicantes con experiencia previa."
    },
    {
      id: 3,
      title: "Curso Especial para Cuerpos de Seguridad",
      date: new Date(2025, 6, 5), // July 5, 2025
      description: "Formación especializada para profesionales de seguridad."
    },
    {
      id: 4, 
      title: "Entrenamiento de Técnicas Avanzadas",
      date: new Date(2025, 6, 15), // July 15, 2025
      description: "Sesión de entrenamiento para cinturones avanzados."
    }
  ];

  // Get events for selected date
  const getEventsForSelectedDate = () => {
    if (!date) return [];
    
    return events.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const selectedDateEvents = getEventsForSelectedDate();

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Calendario de Cursos y Eventos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Selecciona una fecha</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow pointer-events-auto"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {date ? (
                    `Eventos para ${date.toLocaleDateString('es-ES', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}`
                  ) : 'Seleccione una fecha'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map(event => (
                      <div key={event.id} className="border-b pb-4 last:border-0">
                        <h3 className="text-lg font-medium">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No hay eventos programados para este día.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarioPage;
