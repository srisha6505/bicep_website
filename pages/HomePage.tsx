import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion';
import { incubatees, events } from '../constants';
import { Incubatee, Event } from '../types';
import { TypewriterEffect } from '../components/ui/TypewriterEffect';
import { Carousel } from '../components/ui/Carousel';
import Modal from '../components/Modal';
import { PixelImage } from '../components/ui/PixelImage';

const HomePage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<Incubatee | Event | null>(null);

    return (
        <div className="bg-background">
            {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <PixelImage 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                        grid="8x8" 
                    />
                </div>
                <div className="absolute inset-0 bg-black/50" />
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-8 lg:px-12 max-w-full w-full"
                >
                    <TypewriterEffect words={[
                        { text: "Welcome" },
                        { text: "to" },
                        { text: "BMS", className: "text-primary" },
                        { text: "Innovation", className: "text-primary" },
                        { text: "Centre", className: "text-primary" },
                        { text: "And", className: "text-primary" },
                        { text: "Entrepreneurship", className: "text-primary" },
                        { text: "Park", className: "text-primary" },
                    ]} 
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-left tracking-wider"
                    cursorClassName="bg-primary"
                    />
                </motion.div>
            </section>
            
            <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 my-16"/>

            {/* Incubation Section */}
            <section className="py-32 bg-secondary">
                <div className="max-w-full mx-auto px-8 lg:px-12">
                    <div className="flex justify-between items-center mb-20">
                        <div className="text-left">
                            <TypewriterEffect words={[
                                { text: "Incubations" },
                            ]} 
                            className="text-7xl md:text-8xl lg:text-9xl font-bold justify-start"
                            />
                            <TypewriterEffect words={[
                                { text: "Ideas_are_born_here", className: "text-primary" },
                            ]} 
                            className="text-4xl md:text-5xl lg:text-6xl justify-start"
                            cursorClassName="bg-primary"
                            />
                        </div>
                        <Link to="/incubations/current" className="hidden md:flex items-center gap-3 bg-primary text-primary-foreground font-bold text-2xl py-6 px-12 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            View All <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    
                    <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 mb-16"/>
                    
                    {/* Carousel */}
                    <Carousel 
                        slides={incubatees.map(incubatee => ({
                            title: incubatee.name,
                            subtitle: incubatee.tagline,
                            button: "Learn More",
                            src: incubatee.logo,
                            onButtonClick: () => setSelectedItem(incubatee),
                            content: (
                                <div className="text-left text-sm space-y-2">
                                    <p><span className="font-bold">Founder(s):</span> {incubatee.founders.map(f => f.name).join(', ')}</p>
                                    <p><span className="font-bold">Industry:</span> {incubatee.industry}</p>
                                    <p><span className="font-bold">Established:</span> {new Date(incubatee.foundingDate).getFullYear()}</p>
                                </div>
                            )
                        }))}
                        autoScroll={true}
                        autoScrollInterval={5000}
                    />
                    
                    <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 mt-16"/>
                    
                    <div className="text-center mt-20 space-y-8">
                        <Link to="/incubations/current" className="md:hidden inline-flex items-center gap-3 bg-secondary text-foreground font-bold text-2xl py-6 px-12 rounded-lg hover:bg-border transition-colors">
                            View All Incubatees <i className="fas fa-arrow-right"></i>
                        </Link>
                        <div>
                            <Link to="/incubations/process" className="inline-block bg-primary text-primary-foreground font-bold text-2xl py-7 px-16 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 my-16"/>

             {/* Events Section */}
            <section className="py-32 bg-background">
                <div className="max-w-full mx-auto px-8 lg:px-12">
                    <div className="flex justify-between items-center mb-20">
                        <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-left">Events</h2>
                        <Link to="/events" className="hidden md:flex items-center gap-3 bg-primary text-primary-foreground font-bold text-2xl py-6 px-12 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            View All <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    
                    <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 mb-16"/>
                    
                    {/* Carousel */}
                    <Carousel 
                        slides={events.map(event => ({
                            title: event.name,
                            subtitle: event.status === 'Upcoming' ? `${event.status} - ${new Date(event.date).toDateString()}` : new Date(event.date).toDateString(),
                            button: "View Details",
                            src: event.banner,
                            onButtonClick: () => setSelectedItem(event),
                            content: (
                                <div className="text-left text-sm space-y-2">
                                    <p className="line-clamp-2">{event.description}</p>
                                    <p><span className="font-bold">Organizer:</span> {event.organizer}</p>
                                    {event.isFlagship && <p className="text-primary font-bold">⭐ FLAGSHIP EVENT</p>}
                                </div>
                            )
                        }))}
                        autoScroll={true}
                        autoScrollInterval={5000}
                    />
                    
                    <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50 mt-16"/>
                    
                    <div className="text-center mt-16">
                        <Link to="/events" className="md:hidden inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            View All Events <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
