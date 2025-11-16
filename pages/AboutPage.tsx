import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-background">
      <div className="max-w-full mx-auto px-8 lg:px-12 py-24">
        <div className="text-center">
          <h1 className="text-6xl lg:text-7xl font-extrabold">About BICEP</h1>
          <p className="mt-6 text-3xl text-muted-foreground">
            BMSIT Incubation Centre for Entrepreneurship and Placements
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-2xl leading-relaxed">
                    Our mission is to cultivate a culture of innovation and entrepreneurship within the BMSIT community. We aim to identify, nurture, and support promising ideas, transforming them into viable, scalable, and socially impactful businesses. We provide the necessary resources, mentorship, and ecosystem to empower the next generation of leaders and innovators.
                </p>
            </div>
            <img src="https://picsum.photos/seed/mission/800/600" alt="Our Mission" className="rounded-xl shadow-lg"/>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <img src="https://picsum.photos/seed/vision/800/600" alt="Our Vision" className="rounded-xl shadow-lg order-last md:order-first"/>
            <div>
                <h2 className="text-5xl font-bold mb-6">Our Vision</h2>
                <p className="text-muted-foreground text-2xl leading-relaxed">
                    To be a leading university-based incubation center in India, recognized for creating a dynamic startup ecosystem that produces successful, globally competitive companies. We envision a future where every student with an entrepreneurial spark has the opportunity to thrive and contribute to the nation's economic growth.
                </p>
            </div>
        </div>
        
        <div className="mt-28 text-center bg-secondary py-24 rounded-xl">
            <h2 className="text-5xl font-bold mb-12">Join Our Ecosystem</h2>
            <p className="text-muted-foreground text-2xl max-w-4xl mx-auto mb-12">
                Whether you're a student with a budding idea, an industry expert willing to mentor, or an investor looking for the next big thing, BICEP is the place to connect and collaborate.
            </p>
            <div className="space-x-6">
                <Link to="/incubations/process" className="bg-primary text-primary-foreground font-bold text-xl py-5 px-10 rounded-lg hover:bg-primary/90">Get Incubated</Link>
                <Link to="/contact" className="bg-card border border-border text-card-foreground font-bold text-xl py-5 px-10 rounded-lg hover:bg-border">Partner With Us</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;