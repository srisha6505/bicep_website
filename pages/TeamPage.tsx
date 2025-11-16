import React from 'react';
import { teamMembers } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-card border border-border rounded-xl shadow-md text-center p-6 transition-transform transform hover:-translate-y-2">
    <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary" />
    <h3 className="text-xl font-bold">{member.name}</h3>
    <p className="text-primary">{member.designation}</p>
    <p className="text-muted-foreground mt-4 text-sm">{member.bio}</p>
  </div>
);

const TeamPage: React.FC = () => {
  const leadership = teamMembers.filter(m => m.category === 'Faculty & Leadership');
  const clubReps = teamMembers.filter(m => m.category === 'Club Representative');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Our Team</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated mentors, faculty, and student leaders driving BICEP's success and empowering our entrepreneurs.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Faculty & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map(member => <TeamMemberCard key={member.id} member={member} />)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Club Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubReps.map(member => <TeamMemberCard key={member.id} member={member} />)}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;