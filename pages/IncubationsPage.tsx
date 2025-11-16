import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { incubatees } from '../constants';
import { Incubatee } from '../types';
import { ExpandableCard } from '../components/ui/ExpandableCard';

const IncubateeList: React.FC<{ status: 'Current' | 'Alumni' }> = ({ status }) => {
  const filteredIncubatees = incubatees.filter(i => i.status === status);
  return (
    <div className="space-y-12">
      {status === 'Current' && (
        <div className="text-center">
          <NavLink to="/incubations/process" className="bg-primary text-primary-foreground font-bold text-2xl py-6 px-14 rounded-lg hover:bg-primary/90 transition-colors shadow-lg inline-block">
            Apply Now
          </NavLink>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredIncubatees.map(incubatee => 
          <ExpandableCard 
              key={incubatee.id}
              imageUrl={incubatee.logo}
              cardHeader={
                  <div className="flex items-center space-x-6">
                      <img src={incubatee.logo} alt={incubatee.name} className="w-16 h-16 rounded-full object-cover" />
                      <div>
                          <h3 className="text-3xl font-bold">{incubatee.name}</h3>
                          <p className="text-lg text-primary">{incubatee.industry}</p>
                      </div>
                  </div>
              }
              // FIX: Changed cardContent prop to expandedContent to match component definition.
              expandedContent={
                   <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">{incubatee.description.substring(0, 120)}...</p>
                      <NavLink to={`/incubatee/${incubatee.slug}`} className="text-primary text-lg font-semibold hover:underline">Learn More &rarr;</NavLink>
                  </div>
              }
          />
        )}
      </div>
    </div>
  );
};

const Process: React.FC = () => (
  <div className="space-y-12 max-w-5xl mx-auto">
    <div>
      <h2 className="text-5xl font-bold mb-6 text-center">Application Process</h2>
      <p className="text-muted-foreground text-2xl text-center">Our incubation process is designed to be straightforward and supportive. We look for passionate founders with innovative ideas that have the potential for significant impact.</p>
    </div>
    <div className="space-y-6">
      <div className="bg-card border border-border p-10 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold">1. Online Application</h3>
        <p className="text-muted-foreground text-xl mt-4">Submit your detailed business plan through our online portal. Make sure to highlight your unique value proposition, market analysis, and team.</p>
      </div>
       <div className="bg-card border border-border p-10 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold">2. Screening & Shortlisting</h3>
        <p className="text-muted-foreground text-xl mt-4">Our expert panel reviews all applications. Shortlisted candidates are invited for an initial interview.</p>
      </div>
       <div className="bg-card border border-border p-10 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold">3. Pitch Presentation</h3>
        <p className="text-muted-foreground text-xl mt-4">Present your idea to the BICEP selection committee. This is your chance to showcase your passion and vision.</p>
      </div>
       <div className="bg-card border border-border p-10 rounded-lg shadow-sm">
        <h3 className="text-3xl font-semibold">4. Onboarding</h3>
        <p className="text-muted-foreground text-xl mt-4">Successful applicants are officially onboarded as BICEP incubatees and gain access to all our resources.</p>
      </div>
    </div>
     <div className="text-center pt-6">
        <button className="bg-primary text-primary-foreground font-bold text-2xl py-6 px-14 rounded-lg hover:bg-primary/90 transition-colors shadow-lg">Apply Now</button>
    </div>
  </div>
);

const IncubationsPage: React.FC = () => {
    const location = useLocation();
    const isRootIncubations = location.pathname === '/incubations' || location.pathname === '/incubations/';

    const activeLinkClass = "bg-primary text-primary-foreground";
    const inactiveLinkClass = "bg-secondary text-secondary-foreground hover:bg-border";

  return (
    <div className="max-w-full mx-auto px-8 lg:px-12 py-20">
      <h1 className="text-6xl font-bold text-center mb-6 lg:text-7xl">Our Incubatees</h1>
      <p className="text-2xl text-muted-foreground text-center mb-20 max-w-4xl mx-auto">The heart of BICEP: The innovative startups we support. Explore our current ventures and successful alumni.</p>
      
      <div className="flex justify-center mb-16">
        <div className="flex space-x-2 bg-secondary p-2 rounded-lg">
          <NavLink to="/incubations/current" className={({isActive}) => `${isActive || isRootIncubations ? activeLinkClass : inactiveLinkClass} px-8 py-4 rounded-md font-semibold transition-colors text-lg`}>Current</NavLink>
          <NavLink to="/incubations/alumni" className={({isActive}) => `${isActive ? activeLinkClass : inactiveLinkClass} px-8 py-4 rounded-md font-semibold transition-colors text-lg`}>Alumni</NavLink>
          <NavLink to="/incubations/process" className={({isActive}) => `${isActive ? activeLinkClass : inactiveLinkClass} px-8 py-4 rounded-md font-semibold transition-colors text-lg`}>How to Get Incubated</NavLink>
        </div>
      </div>

      <Routes>
        <Route index element={<IncubateeList status="Current" />} />
        <Route path="current" element={<IncubateeList status="Current" />} />
        <Route path="alumni" element={<IncubateeList status="Alumni" />} />
        <Route path="process" element={<Process />} />
      </Routes>
    </div>
  );
};

export default IncubationsPage;