import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">About BICEP</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            BMSIT Incubation Centre for Entrepreneurship and Placements
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Our mission is to cultivate a culture of innovation and entrepreneurship within the BMSIT community. We aim to identify, nurture, and support promising ideas, transforming them into viable, scalable, and socially impactful businesses. We provide the necessary resources, mentorship, and ecosystem to empower the next generation of leaders and innovators.
                </p>
            </div>
            <img src="https://picsum.photos/seed/mission/800/600" alt="Our Mission" className="rounded-xl shadow-lg"/>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img src="https://picsum.photos/seed/vision/800/600" alt="Our Vision" className="rounded-xl shadow-lg order-last md:order-first"/>
            <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    To be a leading university-based incubation center in India, recognized for creating a dynamic startup ecosystem that produces successful, globally competitive companies. We envision a future where every student with an entrepreneurial spark has the opportunity to thrive and contribute to the nation's economic growth.
                </p>
            </div>
        </div>
        
        <div className="mt-20 text-center bg-secondary py-16 rounded-xl">
            <h2 className="text-3xl font-bold mb-8">Join Our Ecosystem</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Whether you're a student with a budding idea, an industry expert willing to mentor, or an investor looking for the next big thing, BICEP is the place to connect and collaborate.
            </p>
            <div className="space-x-4">
                <Link to="/incubations/process" className="bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90">Get Incubated</Link>
                <Link to="/contact" className="bg-card border border-border text-card-foreground font-bold py-3 px-6 rounded-lg hover:bg-border">Partner With Us</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;