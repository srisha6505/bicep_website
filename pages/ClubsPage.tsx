import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../constants';
import { Club } from '../types';

const ClubCard: React.FC<{ club: Club }> = ({ club }) => (
  <div className="bg-card border border-border rounded-xl shadow-md text-center p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
    <img src={club.logo} alt={club.name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-secondary" />
    <h3 className="text-3xl font-bold">{club.name}</h3>
    <p className="text-muted-foreground my-3 h-12 text-xl">{club.tagline}</p>
    <span className={`inline-block px-4 py-2 text-base font-semibold rounded-full my-3 ${club.recruitmentStatus === 'Hiring' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
      {club.recruitmentStatus}
    </span>
    <p className="mt-3 text-lg text-muted-foreground">{club.memberCount} Members</p>
    <Link to={`/club/${club.slug}`} className="mt-8 inline-block bg-primary text-primary-foreground font-semibold text-lg px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
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
    <div className="max-w-full mx-auto px-8 lg:px-12 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-extrabold lg:text-7xl">Clubs Directory</h1>
        <p className="mt-6 text-3xl text-muted-foreground max-w-4xl mx-auto">
          Find your community, build your skills, and make an impact with our diverse range of student clubs.
        </p>
      </div>

      <div className="mb-12 p-6 bg-secondary rounded-lg flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="flex items-center space-x-3 bg-background p-2 rounded-md">
            <span className="text-lg font-semibold pl-3">Recruitment:</span>
            <button onClick={() => setFilter('all')} className={`px-6 py-3 rounded-md text-lg ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>All</button>
            <button onClick={() => setFilter('hiring')} className={`px-6 py-3 rounded-md text-lg ${filter === 'hiring' ? 'bg-primary text-primary-foreground' : 'hover:bg-border'}`}>Hiring</button>
        </div>
        <div className="flex items-center space-x-3">
          <label htmlFor="category-select" className="text-lg font-semibold">Category:</label>
          <select id="category-select" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="bg-background border border-border rounded-md px-4 py-3 text-lg">
            {clubCategories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredClubs.map(club => <ClubCard key={club.id} club={club} />)}
      </div>
    </div>
  );
};

export default ClubsPage;