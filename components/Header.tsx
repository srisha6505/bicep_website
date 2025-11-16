import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const DropdownMenu: React.FC<{ items: { name: string, path: string }[], parent: string }> = ({ items, parent }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
                {parent} <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-50"
                    >
                        <ul className="py-1">
                            {items.map(item => (
                                <li key={item.name}>
                                    <NavLink to={item.path} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = {
        'Home': '/home',
        'Incubation': [
            { name: 'Apply Now', path: '/incubations/process' },
            { name: 'Incubatees', path: '/incubations/current' },
        ],
        'Events': [
            { name: 'Code-Red', path: '/event/code-red-hackathon' },
            { name: 'Anveshana', path: '/event/anveshana-2024' },
            { name: 'All Events', path: '/events' },
        ],
        'Clubs': [
            { name: 'E-Cell', path: '/club/e-cell' },
            { name: 'IIC', path: '/club/iic' },
            { name: 'All Clubs', path: '/clubs' },
        ],
        'IdeaBank': '/ideabank',
        'Facilities': '/facilities',
        'Team': '/team',
    };
    
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 shadow-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/home" className="text-2xl font-bold text-foreground">
              BICEP
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {Object.entries(navLinks).map(([key, value]) => (
                 Array.isArray(value) ? (
                    <DropdownMenu key={key} parent={key} items={value} />
                ) : (
                    <NavLink
                        key={key}
                        to={value}
                        className={({ isActive }) =>
                          `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`
                        }
                    >
                        {key}
                    </NavLink>
                )
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
             <div className="relative">
                <input type="text" placeholder="Search..." className="bg-secondary border border-border rounded-md pl-10 pr-4 py-1.5 text-sm w-40 focus:w-48 transition-all duration-300 focus:ring-1 focus:ring-ring"/>
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
            </div>
            <ThemeToggle />
            <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 bg-secondary hover:bg-border transition-colors">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary focus:outline-none"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} h-6 w-6`}></i>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
             <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-border/50">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Simplified mobile nav for brevity */}
                    <NavLink to="/home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
                    <NavLink to="/incubations" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Incubations</NavLink>
                    <NavLink to="/events" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium">Events</NavLink>
                    <div className="pt-4 mt-4 border-t border-border/50 flex gap-3">
                         <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-md text-sm font-medium text-foreground bg-secondary hover:bg-border transition-colors">Login</Link>
                         <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Sign Up</Link>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
