import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../constants';
import { Event } from '../types';
import { ExpandableCard } from '../components/ui/ExpandableCard';


const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = useMemo(() => {
    return events
      .filter(event => {
        if (filter === 'upcoming') return event.status === 'Upcoming';
        if (filter === 'past') return event.status === 'Past';
        return true;
      })
      .filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, filter]);

  return (
    <div className="max-w-full mx-auto px-8 lg:px-12 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-extrabold tracking-tight lg:text-7xl">Events Hub</h1>
        <p className="mt-6 text-3xl text-muted-foreground max-w-4xl mx-auto">
          Discover workshops, competitions, and networking sessions designed to fuel your entrepreneurial journey.
        </p>
      </div>

      <div className="mb-12 p-6 bg-secondary rounded-lg flex flex-col md:flex-row gap-6 items-center sticky top-20 z-40 shadow-sm">
        <div className="w-full md:flex-grow">
            <input
                type="text"
                placeholder="Search by event name or organizer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-xl rounded-md bg-background border border-border focus:ring-2 focus:ring-ring"
            />
        </div>
        <div className="flex space-x-3 bg-background p-2 rounded-md">
            <button onClick={() => setFilter('all')} className={`px-6 py-3 rounded-md text-lg font-semibold ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>All</button>
            <button onClick={() => setFilter('upcoming')} className={`px-6 py-3 rounded-md text-lg font-semibold ${filter === 'upcoming' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>Upcoming</button>
            <button onClick={() => setFilter('past')} className={`px-6 py-3 rounded-md text-lg font-semibold ${filter === 'past' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>Past</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => 
             <ExpandableCard 
                key={event.id}
                imageUrl={event.banner}
                cardHeader={
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg text-primary font-semibold">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                             <span className={`px-3 py-1 text-base font-semibold rounded-full ${event.status === 'Upcoming' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {event.status}
                            </span>
                        </div>
                       <h3 className="text-2xl font-bold mt-3">{event.name}</h3>
                       <p className="text-muted-foreground text-lg flex items-center mt-2"><i className="fas fa-map-marker-alt mr-2"></i>{event.venue}</p>
                    </div>
                }
                // FIX: Changed cardContent prop to expandedContent to match component definition.
                expandedContent={
                     <div className="space-y-4">
                        <p className="text-lg text-muted-foreground">{event.description.substring(0, 100)}...</p>
                        <Link to={`/event/${event.slug}`} className="text-primary text-lg font-semibold hover:underline">
                             {event.status === 'Upcoming' ? 'View & Register' : 'View Details'} &rarr;
                        </Link>
                    </div>
                }
           />
          )
        ) : (
          <p className="text-center text-muted-foreground md:col-span-2 lg:col-span-3 py-16">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;