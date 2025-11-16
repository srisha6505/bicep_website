import React from 'react';
import { teamMembers } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-card border border-border rounded-xl shadow-md text-center p-10 transition-transform transform hover:-translate-y-2">
    <img src={member.photo} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-secondary" />
    <h3 className="text-3xl font-bold">{member.name}</h3>
    <p className="text-primary text-xl mt-2">{member.designation}</p>
    <p className="text-muted-foreground mt-6 text-lg">{member.bio}</p>
  </div>
);

const TeamPage: React.FC = () => {
  const leadership = teamMembers.filter(m => m.category === 'Faculty & Leadership');
  const clubReps = teamMembers.filter(m => m.category === 'Club Representative');

  return (
    <div className="max-w-full mx-auto px-8 lg:px-12 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-extrabold lg:text-7xl">Our Team</h1>
        <p className="mt-6 text-3xl text-muted-foreground max-w-4xl mx-auto">
          Meet the dedicated mentors, faculty, and student leaders driving BICEP's success and empowering our entrepreneurs.
        </p>
      </div>

      <section className="mb-24">
        <h2 className="text-5xl font-bold text-center mb-12">Faculty & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadership.map(member => <TeamMemberCard key={member.id} member={member} />)}
        </div>
      </section>

      <section>
        <h2 className="text-5xl font-bold text-center mb-12">Club Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {clubReps.map(member => <TeamMemberCard key={member.id} member={member} />)}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;