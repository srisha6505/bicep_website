import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Incubatee, Event } from '../types';

type ModalProps = {
  item: Incubatee | Event;
  onClose: () => void;
};

// Type guard to check if the item is an Incubatee
function isIncubatee(item: Incubatee | Event): item is Incubatee {
  return 'founders' in item;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const renderIncubateeDetails = (incubatee: Incubatee) => (
    <>
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <img src={incubatee.logo} alt={incubatee.name} className="w-24 h-24 rounded-lg object-cover border-2 border-border flex-shrink-0"/>
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-foreground">{incubatee.name}</h2>
          <p className="text-primary text-lg mt-1">{incubatee.tagline}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>{incubatee.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-border">
          <div><span className="font-semibold text-foreground/80">Industry:</span> {incubatee.industry}</div>
          <div><span className="font-semibold text-foreground/80">Stage:</span> {incubatee.stage}</div>
          <div><span className="font-semibold text-foreground/80">Established:</span> {incubatee.foundingDate}</div>
        </div>
         <div>
            <h3 className="font-semibold text-foreground/80 mb-2">Founder(s):</h3>
            <ul className="space-y-1 list-disc list-inside">
                {incubatee.founders.map(f => <li key={f.name}>{f.name} ({f.background})</li>)}
            </ul>
        </div>
      </div>
      <div className="mt-8 text-left">
        <Link to={`/incubatee/${incubatee.slug}`} className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Explore More
        </Link>
      </div>
    </>
  );

  const renderEventDetails = (event: Event) => (
    <>
        <img src={event.banner} alt={event.name} className="w-full h-48 rounded-lg object-cover mb-4"/>
        <h2 className="text-3xl font-bold text-foreground">{event.name}</h2>
        <p className="text-primary text-lg mt-1">{event.tagline}</p>
        <div className="mt-6 space-y-4 text-muted-foreground">
            <p>{event.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-border">
                <div><span className="font-semibold text-foreground/80">Date:</span> {new Date(event.date).toDateString()}</div>
                <div><span className="font-semibold text-foreground/80">Time:</span> {event.time}</div>
                <div><span className="font-semibold text-foreground/80">Venue:</span> {event.venue}</div>
                <div><span className="font-semibold text-foreground/80">Organizer:</span> {event.organizer}</div>
            </div>
        </div>
        <div className="mt-8 text-left">
             <Link to={`/event/${event.slug}`} className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                {event.status === 'Upcoming' ? 'Register Now' : 'View Details'}
            </Link>
        </div>
    </>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className="bg-card border border-border rounded-xl shadow-lg w-full max-w-2xl p-8 relative text-left overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
            <i className="fas fa-times fa-lg"></i>
          </button>
          {isIncubatee(item) ? renderIncubateeDetails(item) : renderEventDetails(item)}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;