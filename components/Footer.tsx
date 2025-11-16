import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-2">BICEP</h3>
            <p className="text-muted-foreground">
              BMS Incubation & Entrepreneurship Park
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/incubations" className="text-muted-foreground hover:text-primary">Incubatees</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          <p>&copy; {new Date().getFullYear()} BICEP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
