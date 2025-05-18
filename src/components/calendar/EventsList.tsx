
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEvent } from '@/types/calendar';

interface EventsListProps {
  date: Date | undefined;
  events: CalendarEvent[];
}

const EventsList = ({
  date,
  events
}: EventsListProps) => {
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
  const formattedDate = date ? new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date) : '';
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          {date ? `Eventos para ${formattedDate}` : 'Selecciona una fecha'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {selectedDateEvents.length > 0 ? (
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {selectedDateEvents.map((event) => (
              <div 
                key={event.id}
                className="p-4 rounded-md shadow-sm border"
                style={{
                  borderLeft: event.type === 'inmuebles' 
                    ? '4px solid #8B5CF6' 
                    : event.type === 'autoproteccion'
                      ? '4px solid #F97316'
                      : event.type === 'inmuebles_urbano'
                        ? '4px solid #3B82F6'
                        : '4px solid #94a3b8'
                }}
              >
                <h3 className="font-medium text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay eventos programados para esta fecha.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default EventsList;
