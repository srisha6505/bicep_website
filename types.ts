
export interface Incubatee {
  id: number;
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  industry: string;
  founders: { name: string; photo: string; background: string; }[];
  foundingDate: string;
  stage: 'Idea' | 'MVP' | 'Growth';
  achievements: string[];
  website: string;
  socials: { [key: string]: string; };
  status: 'Current' | 'Alumni';
}

export interface Event {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  banner: string;
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Past';
  organizer: string;
  description: string;
  agenda: { time: string; topic: string; }[];
  speakers: { name: string; title: string; photo: string; }[];
  gallery?: string[];
  report?: string;
  // FIX: Added optional isFlagship property to the Event interface.
  isFlagship?: boolean;
}

export interface Club {
  id: number;
  slug: string;
  name:string;
  logo: string;
  tagline: string;
  description: string;
  memberCount: number;
  recruitmentStatus: 'Hiring' | 'Not Hiring';
  category: string;
  establishmentDate: string;
  leadership: { name: string; role: string; photo: string; }[];
  flagshipEvent: { name: string; description: string; };
  achievements: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  photo: string;
  qualification: string;
  role: string;
  bio: string;
  category: 'Faculty & Leadership' | 'Club Representative' | 'Administrative Staff';
}

export interface Facility {
  id: number;
  name: string;
  type: 'Lab' | 'Office Space' | 'Meeting Room';
  description: string;
  image: string;
  equipment?: string[];
  capacity?: number;
}