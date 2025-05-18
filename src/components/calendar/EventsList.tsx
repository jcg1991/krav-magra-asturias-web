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
    return events.filter(event => event.date.getDate() === date.getDate() && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
  };
  const selectedDateEvents = getEventsForSelectedDate();
  return <Card className="max-h-[600px] overflow-y-auto">
      
      
    </Card>;
};
export default EventsList;