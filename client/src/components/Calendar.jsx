import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Month view
import interactionPlugin from '@fullcalendar/interaction'; // For drag & drop and event clicks
import { v4 as uuidv4 } from 'uuid';

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Math Exam",
      start: "2024-11-10T09:00:00",
      end: "2024-11-10T12:00:00",
      description: "Final exam for Math 101"
    },
    {
      id: "2",
      title: "History Lecture",
      start: "2024-11-12T14:00:00",
      end: "2024-11-12T16:00:00",
      description: "Lecture on World War II"
    },
    {
      id: "3",
      title: "Project Deadline",
      start: "2024-11-15T23:59:00",
      end: "2024-11-15T23:59:00",
      description: "Submit final project for Computer Science"
    },
    {
      id: "4",
      title: "Study Group",
      start: "2024-11-18T18:00:00",
      end: "2024-11-18T20:00:00",
      description: "Group study session for upcoming exams"
    },
    {
      id: "5",
      title: "Club Meeting",
      start: "2024-11-20T15:00:00",
      end: "2024-11-20T17:00:00",
      description: "Monthly meeting of the Science Club"
    },
    {
      id: "6",
      title: "Sports Practice",
      start: "2024-11-25T10:00:00",
      end: "2024-11-25T12:00:00",
      description: "Practice for the upcoming football match"
    },
    {
      id: "7",
      title: "Holiday",
      start: "2024-11-26T00:00:00",
      end: "2024-11-26T23:59:00",
      description: "School holiday for Thanksgiving"
    },
    {
      id: "8",
      title: "Web Development Workshop",
      start: "2024-11-30T09:00:00",
      end: "2024-11-30T16:00:00",
      description: "Workshop on modern web development tools"
    }
  ]);

  useEffect(()=>alert("Select Date to add an event!"),[]);

  const handleDateClick = async (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        id: uuidv4(),
        title,
        start: arg.dateStr,
        end: arg.dateStr,
      };

      setEvents([...events, newEvent]); // Add new event to the state
    }
  };

  const handleEventDrop = async (info) => {
    const updatedEvent = {
      id: info.event.id,
      start: info.event.start.toISOString(),
      end: info.event.end.toISOString(),
    };

    const updatedEvents = events.map((event) =>
      event.id === info.event.id ? { ...event, ...updatedEvent } : event
    );
    setEvents(updatedEvents);
  };

  const handleEventClick = async (info) => {
    const confirmed = confirm('Do you want to delete this event?');
    if (confirmed) {
        console.log(confirmed)
        const updatedEvents = events.filter((event) => event.id !== info.event.id);
        console.log(updatedEvents)
        setEvents(updatedEvents);
    }
  };

  return (
    <div className="container mx-auto sm:p-6">
      <div className="bg-white shadow-lg rounded-lg sm:p-4">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-3 sm:mb-6">Student Event Calendar</h1>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick} // Handle date clicks to add events
          eventDrop={handleEventDrop} // Handle drag-and-drop events
          eventClick={handleEventClick} // Handle event click to delete
          editable={true}
          droppable={true}
          eventColor="#4CAF50" // Set a custom color for event titles
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          
        />
      </div>
    </div>
  );
};

export default Calendar;
