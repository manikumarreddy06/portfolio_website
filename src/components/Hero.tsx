import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import profileimg from '../assets/profileimg.jpeg';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] opacity-95" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-fade-in"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 transform transition-transform duration-300 group-hover:scale-105">
              {/* Replace the URL below with your actual profile picture URL */}
              <img 
                src={profileimg}
                alt="ManiKumar Reddy Bogolu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              ManiKumar Reddy Bogolu
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 font-light mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              DevOps Engineer
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Automating Excellence, Scaling Success
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <a href="mailto:mani463371@gmail.com" 
                 className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/manikumarreddy-bogolu" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-blue-600/90 text-white px-6 py-3 rounded-lg hover:bg-blue-700/90 transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="mt-12 flex gap-6 text-blue-200 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <a href="mailto:mani463371@gmail.com" className="hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+916301343654" className="hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}