import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../constants';

const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find(e => e.slug === slug);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Event not found</h1>
        <Link to="/events" className="text-primary mt-4 inline-block">Back to Events</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${event.banner})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-6xl lg:text-7xl font-bold">{event.name}</h1>
            <p className="text-3xl mt-2">{event.tagline}</p>
            <div className="mt-6 text-2xl font-semibold space-x-6">
                <span><i className="fas fa-calendar-alt mr-2"></i>{new Date(event.date).toDateString()}</span>
                <span><i className="fas fa-clock mr-2"></i>{event.time}</span>
                <span><i className="fas fa-map-marker-alt mr-2"></i>{event.venue}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                <h2 className="text-4xl font-bold mb-4">About the Event</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">{event.description}</p>
            </div>
            
            {event.agenda && event.agenda.length > 0 && (
                <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h3 className="text-4xl font-bold mb-6">Agenda</h3>
                    <div className="space-y-4">
                        {event.agenda.map((item, index) => (
                            <div key={index} className="flex items-center bg-secondary p-4 rounded-lg">
                                <span className="font-bold text-primary text-xl w-28">{item.time}</span>
                                <p className="text-xl">{item.topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {event.speakers && event.speakers.length > 0 && (
                 <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h3 className="text-4xl font-bold mb-6">Speakers</h3>
                    <div className="flex flex-wrap gap-8">
                         {event.speakers.map((speaker, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={speaker.photo} alt={speaker.name} className="w-16 h-16 rounded-full"/>
                                <div>
                                    <p className="font-bold text-xl">{speaker.name}</p>
                                    <p className="text-muted-foreground text-lg">{speaker.title}</p>
                                </div>
                            </div>
                         ))}
                    </div>
                </div>
            )}
             {event.status === 'Past' && (
                <>
                {event.report && <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h3 className="text-4xl font-bold mb-4">Event Summary</h3>
                    <p className="text-muted-foreground text-xl bg-secondary p-4 rounded-lg">{event.report}</p>
                </div>}
                {event.gallery && event.gallery.length > 0 && (
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h3 className="text-4xl font-bold mb-4">Photo Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {event.gallery.map((img, index) => (
                                <img key={index} src={img} alt={`Event gallery ${index+1}`} className="rounded-lg object-cover w-full h-48"/>
                            ))}
                        </div>
                    </div>
                )}
                </>
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 rounded-xl shadow-md sticky top-24">
              <h3 className="text-4xl font-bold mb-4">
                {event.status === 'Upcoming' ? 'Registration' : 'Event Details'}
              </h3>
              {event.status === 'Upcoming' ? (
                <>
                  <p className="mb-4 text-green-400 font-bold text-2xl">Status: Open</p>
                  <button className="w-full bg-primary text-primary-foreground font-bold text-xl py-5 rounded-lg hover:bg-primary/90 transition-colors">
                    Register Now
                  </button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">Registration closes soon!</p>
                </>
              ) : (
                <p className="text-red-400 font-bold text-lg">Status: Closed</p>
              )}
               <div className="mt-6 border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Organizer</h4>
                <p className="text-muted-foreground">{event.organizer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;