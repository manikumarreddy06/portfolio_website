import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mani463371@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:mani463371@gmail.com" 
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Mail className="w-6 h-6" />
                <span>mani463371@gmail.com</span>
              </a>
              <a href="tel:+916301343654" 
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Phone className="w-6 h-6" />
                <span>+91 6301343654</span>
              </a>
              <a href="https://www.linkedin.com/in/manikumarreddy-bogolu" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}