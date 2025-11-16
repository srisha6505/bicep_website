import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { incubatees } from '../constants';

const IncubateeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const incubatee = incubatees.find(i => i.slug === slug);

  if (!incubatee) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Incubatee not found</h1>
        <Link to="/incubations" className="text-primary mt-4 inline-block">Back to Incubations</Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3 text-center">
                    <img src={incubatee.logo} alt={`${incubatee.name} logo`} className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-border shadow-lg" />
                    <h1 className="text-4xl font-bold mt-6">{incubatee.name}</h1>
                    <p className="text-xl text-muted-foreground mt-2">{incubatee.tagline}</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href={incubatee.website} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">Website</a>
                        {incubatee.socials.linkedin && <a href={incubatee.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><i className="fab fa-linkedin fa-2x"></i></a>}
                        {incubatee.socials.twitter && <a href={incubatee.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><i className="fab fa-twitter fa-2x"></i></a>}
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="bg-card border border-border p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">About {incubatee.name}</h2>
                        <p className="text-muted-foreground leading-relaxed">{incubatee.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
                            <div>
                                <p className="font-bold text-lg">{incubatee.industry}</p>
                                <p className="text-sm text-muted-foreground">Industry</p>
                            </div>
                             <div>
                                <p className="font-bold text-lg">{incubatee.foundingDate}</p>
                                <p className="text-sm text-muted-foreground">Founding Date</p>
                            </div>
                             <div>
                                <p className="font-bold text-lg text-green-400">{incubatee.stage} Stage</p>
                                <p className="text-sm text-muted-foreground">Current Stage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">Founders</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {incubatee.founders.map(founder => (
                        <div key={founder.name} className="bg-card border border-border p-6 rounded-xl text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md">
                            <img src={founder.photo} alt={founder.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold">{founder.name}</h3>
                            <p className="text-muted-foreground">{founder.background}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">Key Achievements</h2>
                <div className="max-w-2xl mx-auto">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground bg-card border border-border p-6 rounded-xl shadow-md">
                        {incubatee.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default IncubateeDetailPage;