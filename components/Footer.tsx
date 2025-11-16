import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background px-8 lg:px-12 py-8">
      <div className="w-full bg-card border rounded-3xl shadow-2xl px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-lg">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold text-foreground mb-4">BICEP</h3>
            <p className="text-muted-foreground text-lg">
              BMS Incubation & Entrepreneurship Park
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xl">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/incubations" className="text-muted-foreground hover:text-primary">Incubatees</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xl">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-foreground mb-4 text-xl">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-border text-center text-muted-foreground text-base">
          <p>&copy; {new Date().getFullYear()} BICEP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
