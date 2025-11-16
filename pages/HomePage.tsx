import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { incubatees, events } from '../constants';
import { Incubatee, Event } from '../types';
import { TypewriterEffect } from '../components/ui/TypewriterEffect';
import { ExpandableCard } from '../components/ui/ExpandableCard';
import Modal from '../components/Modal';

const HomePage: React.FC = () => {
    const featuredIncubatees = incubatees.slice(0, 6);
    const featuredEvents = events.slice(0, 6);
    const [selectedItem, setSelectedItem] = useState<Incubatee | Event | null>(null);

    return (
        <div className="bg-background">
            {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')", filter: 'brightness(0.4)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 p-4"
                >
                    <TypewriterEffect words={[
                        { text: "Welcome to" },
                        { text: "BMS Innovation Centre And Entrepreneurship Park", className: "text-primary" },
                    ]} 
                    className="text-3xl sm:text-4xl md:text-6xl font-bold"
                    cursorClassName="bg-primary"
                    />
                </motion.div>
            </section>
            
            <div className="h-1 bg-gradient-to-r from-background via-primary to-background opacity-50"/>

            {/* Incubation Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-left mb-12">
                         <TypewriterEffect words={[
                            { text: "Incubations" },
                        ]} 
                        className="text-4xl md:text-5xl font-bold justify-start"
                        />
                         <TypewriterEffect words={[
                            { text: "Ideas are born", className: "text-primary" },
                        ]} 
                        className="text-2xl justify-start"
                        cursorClassName="bg-primary"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredIncubatees.map((incubatee, i) => (
                             <motion.div
                                key={incubatee.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <ExpandableCard 
                                    imageUrl={incubatee.logo}
                                    cardHeader={<p className="font-bold text-lg">{incubatee.name}</p>}
                                    expandedContent={
                                        <div className="text-xs space-y-1 text-muted-foreground">
                                            <p className="font-semibold text-foreground/90">{incubatee.tagline}</p>
                                            <p><span className="font-bold">Founder(s):</span> {incubatee.founders.map(f => f.name).join(', ')}</p>
                                            <p><span className="font-bold">Established:</span> {new Date(incubatee.foundingDate).getFullYear()}</p>
                                        </div>
                                    }
                                    onClick={() => setSelectedItem(incubatee)}
                                />
                             </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/incubations/process" className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

             {/* Events Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-left mb-12">Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {featuredEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <ExpandableCard 
                                    imageUrl={event.banner}
                                    cardHeader={
                                        <div>
                                            <div className="flex justify-between items-center text-xs mb-1">
                                                <span className={`font-bold ${event.status === 'Upcoming' ? 'text-primary' : 'text-muted-foreground'}`}>{event.status}</span>
                                                {event.isFlagship && <span className="text-primary font-bold">FLAGSHIP</span>}
                                            </div>
                                            <p className="font-bold text-lg leading-tight">{event.name}</p>
                                        </div>
                                    }
                                    expandedContent={
                                        <div className="space-y-2 text-xs">
                                            <p className="text-muted-foreground">{event.description.substring(0, 80)}...</p>
                                            <p><i className="fas fa-calendar-alt text-primary mr-2"></i>{new Date(event.date).toDateString()}</p>
                                            <p><i className="fas fa-cube text-primary mr-2"></i>{event.organizer}</p>
                                        </div>
                                    }
                                    onClick={() => setSelectedItem(event)}
                                />
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
