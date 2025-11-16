import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../constants';
import { Club } from '../types';

const ClubCard: React.FC<{ club: Club }> = ({ club }) => (
  <div className="bg-card border border-border rounded-xl shadow-md text-center p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
    <img src={club.logo} alt={club.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-secondary" />
    <h3 className="text-xl font-bold">{club.name}</h3>
    <p className="text-muted-foreground my-2 h-10">{club.tagline}</p>
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full my-2 ${club.recruitmentStatus === 'Hiring' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
      {club.recruitmentStatus}
    </span>
    <p className="mt-2 text-sm text-muted-foreground">{club.memberCount} Members</p>
    <Link to={`/club/${club.slug}`} className="mt-6 inline-block bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
      Learn More
    </Link>
  </div>
);

const ClubsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hiring'>('all');
  const clubCategories = useMemo(() => ['all', ...Array.from(new Set(clubs.map(c => c.category)))], []);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredClubs = useMemo(() => {
    return clubs
      .filter(club => filter === 'all' || club.recruitmentStatus === 'Hiring')
      .filter(club => categoryFilter === 'all' || club.category === categoryFilter);
  }, [filter, categoryFilter]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Clubs Directory</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Find your community, build your skills, and make an impact with our diverse range of student clubs.
        </p>
      </div>

      <div className="mb-8 p-4 bg-secondary rounded-lg flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="flex items-center space-x-2 bg-background p-1 rounded-md">
            <span className="text-sm font-semibold pl-2">Recruitment:</span>
            <button onClick={() => setFilter('all')} className={`px-4 py-1.5 rounded-md text-sm ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>All</button>
            <button onClick={() => setFilter('hiring')} className={`px-4 py-1.5 rounded-md text-sm ${filter === 'hiring' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>Hiring</button>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="category-select" className="text-sm font-semibold">Category:</label>
          <select id="category-select" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="bg-background border border-border rounded-md px-3 py-2 text-sm">
            {clubCategories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredClubs.map(club => <ClubCard key={club.id} club={club} />)}
      </div>
    </div>
  );
};

export default ClubsPage;