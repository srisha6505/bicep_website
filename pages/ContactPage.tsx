import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl lg:text-7xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-3xl text-muted-foreground max-w-2xl mx-auto">
          Have a question, an idea, or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-xl text-muted-foreground">Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-secondary border-border p-4 text-xl rounded-md focus:ring-2 focus:ring-ring"/>
            </div>
             <div>
              <label htmlFor="email" className="block mb-1 font-medium text-xl text-muted-foreground">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-secondary border-border p-4 text-xl rounded-md focus:ring-2 focus:ring-ring"/>
            </div>
             <div>
              <label htmlFor="message" className="block mb-1 font-medium text-xl text-muted-foreground">Message</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-secondary border-border p-4 text-xl rounded-md focus:ring-2 focus:ring-ring"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold text-xl py-5 rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitted && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
          </form>
        </div>
        <div className="space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold flex items-center gap-3"><i className="fas fa-map-marker-alt text-primary"></i>Address</h3>
                <p className="text-muted-foreground text-xl mt-2">BMS Institute of Technology and Management, Avalahalli, Yelahanka, Bengaluru, Karnataka 560064</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold flex items-center gap-3"><i className="fas fa-envelope text-primary"></i>Email</h3>
                <a href="mailto:bicep@bmsit.in" className="text-primary text-xl mt-2 block hover:underline">bicep@bmsit.in</a>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;