import React, { useState } from 'react';

interface Idea {
  title: string;
  category: string;
  description: string;
  contributor: string;
}

const IdeaBankPage: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([
    { title: 'Campus Sustainability App', category: 'GreenTech', description: 'An app to track and reward sustainable practices on campus.', contributor: 'Alex Johnson' },
    { title: 'AI-Powered Tutor', category: 'EdTech', description: 'A personalized learning assistant for students.', contributor: 'Samira Khan' },
  ]);

  const [newIdea, setNewIdea] = useState({ title: '', category: '', description: '', contributor: 'Anonymous' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewIdea(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIdeas(prev => [newIdea, ...prev]);
        setNewIdea({ title: '', category: '', description: '', contributor: 'Anonymous' });
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl lg:text-7xl font-extrabold">Idea Bank</h1>
        <p className="mt-4 text-3xl text-muted-foreground max-w-2xl mx-auto">
          The starting point for innovation. Share your idea or get inspired by the creativity of our community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Submission Form */}
        <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Submit Your Idea</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-xl font-medium text-muted-foreground mb-1">Idea Title</label>
              <input type="text" name="title" id="title" value={newIdea.title} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-xl focus:ring-2 focus:ring-ring" required />
            </div>
            <div>
              <label htmlFor="category" className="block text-xl font-medium text-muted-foreground mb-1">Category/Domain</label>
              <select name="category" id="category" value={newIdea.category} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-xl focus:ring-2 focus:ring-ring" required>
                <option value="">Select a category</option>
                <option value="EdTech">EdTech</option>
                <option value="FinTech">FinTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="GreenTech">GreenTech</option>
                <option value="SaaS">SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-xl font-medium text-muted-foreground mb-1">Detailed Description</label>
              <textarea name="description" id="description" rows={5} value={newIdea.description} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-xl focus:ring-2 focus:ring-ring" required></textarea>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold text-xl py-5 rounded-lg hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors">
                    {isSubmitting ? 'Submitting...' : 'Submit Idea'}
                </button>
            </div>
            {submitted && <p className="text-green-400 text-center">Thank you! Your idea has been submitted.</p>}
          </form>
        </div>

        {/* Browse Ideas */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Browse Ideas</h2>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-card border border-border p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold">{idea.title}</h3>
                  <span className="text-lg bg-primary/20 text-primary px-3 py-2 rounded-full font-medium">{idea.category}</span>
                </div>
                <p className="text-muted-foreground text-xl my-2">{idea.description}</p>
                <p className="text-lg text-foreground/50">Submitted by: {idea.contributor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaBankPage;