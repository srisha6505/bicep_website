import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { incubatees } from '../constants';
import { Incubatee } from '../types';
import { ExpandableCard } from '../components/ui/ExpandableCard';

const IncubateeList: React.FC<{ status: 'Current' | 'Alumni' }> = ({ status }) => {
  const filteredIncubatees = incubatees.filter(i => i.status === status);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredIncubatees.map(incubatee => 
        <ExpandableCard 
            key={incubatee.id}
            imageUrl={incubatee.logo}
            cardHeader={
                <div className="flex items-center space-x-4">
                    <img src={incubatee.logo} alt={incubatee.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 className="text-xl font-bold">{incubatee.name}</h3>
                        <p className="text-sm text-primary">{incubatee.industry}</p>
                    </div>
                </div>
            }
            // FIX: Changed cardContent prop to expandedContent to match component definition.
            expandedContent={
                 <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{incubatee.description.substring(0, 120)}...</p>
                    <NavLink to={`/incubatee/${incubatee.slug}`} className="text-primary font-semibold hover:underline">Learn More &rarr;</NavLink>
                </div>
            }
        />
      )}
    </div>
  );
};

const Process: React.FC = () => (
  <div className="space-y-8 max-w-3xl mx-auto">
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Application Process</h2>
      <p className="text-muted-foreground text-center">Our incubation process is designed to be straightforward and supportive. We look for passionate founders with innovative ideas that have the potential for significant impact.</p>
    </div>
    <div className="space-y-4">
      <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">1. Online Application</h3>
        <p className="text-muted-foreground mt-2">Submit your detailed business plan through our online portal. Make sure to highlight your unique value proposition, market analysis, and team.</p>
      </div>
       <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">2. Screening & Shortlisting</h3>
        <p className="text-muted-foreground mt-2">Our expert panel reviews all applications. Shortlisted candidates are invited for an initial interview.</p>
      </div>
       <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">3. Pitch Presentation</h3>
        <p className="text-muted-foreground mt-2">Present your idea to the BICEP selection committee. This is your chance to showcase your passion and vision.</p>
      </div>
       <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">4. Onboarding</h3>
        <p className="text-muted-foreground mt-2">Successful applicants are officially onboarded as BICEP incubatees and gain access to all our resources.</p>
      </div>
    </div>
     <div className="text-center pt-4">
        <button className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors shadow-lg">Apply Now</button>
    </div>
  </div>
);

const IncubationsPage: React.FC = () => {
    const location = useLocation();
    const isRootIncubations = location.pathname === '/incubations' || location.pathname === '/incubations/';

    const activeLinkClass = "bg-primary text-primary-foreground";
    const inactiveLinkClass = "bg-secondary text-secondary-foreground hover:bg-border";

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our Incubatees</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">The heart of BICEP: The innovative startups we support. Explore our current ventures and successful alumni.</p>
      
      <div className="flex justify-center mb-12">
        <div className="flex space-x-1 bg-secondary p-1 rounded-lg">
          <NavLink to="/incubations/process" className={({isActive}) => `${isActive || isRootIncubations ? activeLinkClass : inactiveLinkClass} px-5 py-2 rounded-md font-semibold transition-colors text-sm`}>How to Get Incubated</NavLink>
          <NavLink to="/incubations/current" className={({isActive}) => `${isActive ? activeLinkClass : inactiveLinkClass} px-5 py-2 rounded-md font-semibold transition-colors text-sm`}>Current</NavLink>
          <NavLink to="/incubations/alumni" className={({isActive}) => `${isActive ? activeLinkClass : inactiveLinkClass} px-5 py-2 rounded-md font-semibold transition-colors text-sm`}>Alumni</NavLink>
        </div>
      </div>

      <Routes>
        <Route index element={<Process />} />
        <Route path="process" element={<Process />} />
        <Route path="current" element={<IncubateeList status="Current" />} />
        <Route path="alumni" element={<IncubateeList status="Alumni" />} />
      </Routes>
    </div>
  );
};

export default IncubationsPage;