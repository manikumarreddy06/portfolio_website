import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certs = [
    'AWS Certified Developer - Associate',
    'Certified Kubernetes Administrator'
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Certifications</h2>
        <div className="max-w-2xl mx-auto">
          {certs.map((cert) => (
            <div key={cert} className="flex items-center bg-[#112240] p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Award className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
              <span className="text-lg text-gray-100">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}