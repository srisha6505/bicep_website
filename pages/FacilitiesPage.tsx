import React from 'react';
import { facilities } from '../constants';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl lg:text-7xl font-extrabold">Our Facilities</h1>
        <p className="mt-4 text-3xl text-muted-foreground max-w-2xl mx-auto">
          State-of-the-art infrastructure and collaborative spaces designed to support your entrepreneurial journey from idea to execution.
        </p>
      </div>

      <div className="space-y-16">
        {facilities.map((facility, index) => (
          <div key={facility.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
            <div className="lg:w-1/2">
              <img src={facility.image} alt={facility.name} className="rounded-xl shadow-lg w-full h-80 object-cover" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-semibold text-xl">{facility.type}</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">{facility.name}</h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-6">{facility.description}</p>
              <div className="flex flex-wrap gap-4">
                {facility.equipment && (
                  <div className="w-full">
                    <h4 className="font-semibold text-xl mb-2">Key Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.equipment.map(item => (
                        <span key={item} className="bg-secondary text-secondary-foreground text-lg px-4 py-2 rounded-full">{item}</span>
                      ))}
                    </div>
                  </div>
                )}
                 {facility.capacity && (
                    <div>
                        <h4 className="font-semibold text-xl">Capacity: <span className="text-muted-foreground">{facility.capacity} people</span></h4>
                    </div>
                 )}
              </div>
               <button className="mt-8 bg-primary text-primary-foreground font-semibold text-xl px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors">
                    Request Booking
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesPage;