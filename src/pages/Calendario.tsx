
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

// Define event type
interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  description: string;
  highlighted?: boolean;
  type?: 'inmuebles' | 'autoproteccion';
}

const CalendarioPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample events data - added course dates with highlighted property and type
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
    },
    // Course dates - highlighted with type inmuebles
    {
      id: 5,
      title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 1",
      date: new Date(2025, 5, 24), // June 24, 2025
      description: "Primer día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
      highlighted: true,
      type: 'inmuebles'
    },
    {
      id: 6,
      title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 2",
      date: new Date(2025, 5, 25), // June 25, 2025
      description: "Segundo día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
      highlighted: true,
      type: 'inmuebles'
    },
    {
      id: 7,
      title: "CURSO APERTURA INTERVENCIONES EN INMUEBLES - Día 3",
      date: new Date(2025, 5, 26), // June 26, 2025
      description: "Tercer día del curso de intervenciones en inmuebles impartido por Operativo Unidad Especial.",
      highlighted: true,
      type: 'inmuebles'
    },
    // Adding the new Autoprotección course - highlighted with type autoproteccion
    {
      id: 8,
      title: "CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR - Día 1",
      date: new Date(2025, 4, 24), // May 24, 2025
      description: "Primer día del curso de autoprotección para civiles y defensa del hogar.",
      highlighted: true,
      type: 'autoproteccion'
    },
    {
      id: 9,
      title: "CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR - Día 2",
      date: new Date(2025, 4, 25), // May 25, 2025
      description: "Segundo día del curso de autoprotección para civiles y defensa del hogar.",
      highlighted: true,
      type: 'autoproteccion'
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
  
  // Function to determine day styling based on event type
  const getDayClassNames = (day: Date) => {
    const eventsOnDay = events.filter(
      event => 
        event.date.getDate() === day.getDate() && 
        event.date.getMonth() === day.getMonth() && 
        event.date.getFullYear() === day.getFullYear()
    );
    
    // Check if there's an autoproteccion event
    const hasAutoproteccionEvent = eventsOnDay.some(event => event.type === 'autoproteccion');
    
    // Check if there's an inmuebles event
    const hasInmueblesEvent = eventsOnDay.some(event => event.type === 'inmuebles');
    
    if (hasAutoproteccionEvent) {
      return "bg-[#F97316] text-white ring-2 ring-[#F97316] hover:bg-[#EA580C]";
    }
    
    if (hasInmueblesEvent) {
      return "bg-[#8B5CF6] text-white ring-2 ring-[#8B5CF6] hover:bg-[#7E69AB]";
    }
    
    return eventsOnDay.length > 0 ? "bg-blue-100 text-blue-800 ring-1 ring-blue-400" : "";
  };

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
                  modifiersClassNames={{
                    selected: "bg-primary text-primary-foreground",
                  }}
                  modifiers={{
                    inmuebles: events
                      .filter(event => event.type === 'inmuebles')
                      .map(event => new Date(event.date)),
                    autoproteccion: events
                      .filter(event => event.type === 'autoproteccion')
                      .map(event => new Date(event.date))
                  }}
                  modifiersStyles={{
                    inmuebles: {
                      backgroundColor: "#8B5CF6",
                      color: "white",
                      fontWeight: "bold"
                    },
                    autoproteccion: {
                      backgroundColor: "#F97316",
                      color: "white",
                      fontWeight: "bold"
                    }
                  }}
                />
                
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-sm">Curso Apertura Intervenciones</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-[#F97316]"></div>
                    <span className="text-sm">Curso Autoprotección Civiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-400"></div>
                    <span className="text-sm">Otros eventos</span>
                  </div>
                </div>
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
                      <div 
                        key={event.id} 
                        className={`border-b pb-4 last:border-0 ${
                          event.type === 'inmuebles' 
                            ? 'bg-purple-50 p-4 rounded-md border border-purple-200' 
                            : event.type === 'autoproteccion'
                              ? 'bg-orange-50 p-4 rounded-md border border-orange-200'
                              : ''
                        }`}
                      >
                        <h3 className={`text-lg font-medium ${
                          event.type === 'inmuebles' 
                            ? 'text-purple-800' 
                            : event.type === 'autoproteccion'
                              ? 'text-orange-800'
                              : ''
                        }`}>
                          {event.title}
                        </h3>
                        <p className={
                          event.type === 'inmuebles' 
                            ? 'text-purple-700' 
                            : event.type === 'autoproteccion'
                              ? 'text-orange-700'
                              : 'text-gray-600'
                        }>
                          {event.description}
                        </p>
                        
                        {event.highlighted && (
                          <div className="mt-3">
                            <Link 
                              to={event.type === 'autoproteccion' ? "/curso-autoproteccion" : "/cursos"}
                              className={
                                event.type === 'inmuebles' 
                                  ? 'text-[#8B5CF6] hover:text-[#7E69AB] font-medium underline' 
                                  : 'text-[#F97316] hover:text-[#EA580C] font-medium underline'
                              }
                            >
                              Ver detalles del curso
                            </Link>
                          </div>
                        )}
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

