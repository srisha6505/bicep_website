import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs, events } from '../constants';

const ClubDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const club = clubs.find(c => c.slug === slug);
  const clubEvents = events.filter(e => e.organizer.includes(club?.name || ''));

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Club not found</h1>
        <Link to="/clubs" className="text-primary mt-4 inline-block">Back to Clubs</Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <img src={club.logo} alt={`${club.name} logo`} className="w-40 h-40 rounded-full object-cover border-4 border-border shadow-lg" />
          <h1 className="text-6xl lg:text-7xl font-bold mt-6">{club.name}</h1>
          <p className="text-3xl text-muted-foreground mt-2">{club.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12 text-center">
          <div className="bg-card border border-border p-6 rounded-lg shadow-sm"><p className="text-4xl font-bold">{club.memberCount}</p><p className="text-muted-foreground text-xl">Members</p></div>
          <div className="bg-card border border-border p-6 rounded-lg shadow-sm"><p className="text-4xl font-bold">{club.establishmentDate}</p><p className="text-muted-foreground text-xl">Established</p></div>
          <div className="bg-card border border-border p-6 rounded-lg shadow-sm"><p className="text-4xl font-bold">{clubEvents.length}</p><p className="text-muted-foreground text-xl">Events Organized</p></div>
          <div className="bg-card border border-border p-6 rounded-lg shadow-sm"><p className={`text-4xl font-bold ${club.recruitmentStatus === 'Hiring' ? 'text-green-400' : 'text-red-400'}`}>{club.recruitmentStatus}</p><p className="text-muted-foreground text-xl">Recruitment</p></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h2 className="text-4xl font-bold mb-4">About the Club</h2>
                    <p className="text-muted-foreground text-xl leading-relaxed">{club.description}</p>
                </div>
                <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h2 className="text-4xl font-bold mb-4">Flagship Event: {club.flagshipEvent.name}</h2>
                    <p className="text-muted-foreground text-xl">{club.flagshipEvent.description}</p>
                </div>
                 <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h2 className="text-4xl font-bold mb-4">Events by {club.name}</h2>
                    {clubEvents.length > 0 ? (
                        <ul className="space-y-2">
                            {clubEvents.map(event => (
                                <li key={event.id} className="text-muted-foreground text-xl hover:text-foreground">
                                    <Link to={`/event/${event.slug}`} className="hover:text-primary transition-colors">{event.name} - {new Date(event.date).getFullYear()}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : <p className="text-muted-foreground text-xl">No events found.</p>}
                </div>
            </div>
            <div className="space-y-8">
                <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
                    {club.leadership.map(leader => (
                        <div key={leader.name} className="flex items-center space-x-4 mb-4">
                            <img src={leader.photo} alt={leader.name} className="w-16 h-16 rounded-full"/>
                            <div>
                                <p className="font-bold text-xl">{leader.name}</p>
                                <p className="text-muted-foreground text-lg">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                    <h2 className="text-4xl font-bold mb-4">Join Us</h2>
                    {club.recruitmentStatus === 'Hiring' ?
                     <p className="text-muted-foreground text-xl">We are currently looking for passionate individuals to join our team. Stay tuned for application details!</p>
                     :
                     <p className="text-muted-foreground text-xl">Recruitment is currently closed. Follow our social media for updates on the next hiring cycle.</p>
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;