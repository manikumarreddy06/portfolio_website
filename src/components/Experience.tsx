import React from 'react';

const ExperienceCard = ({ company, period, achievements }: { company: string, period: string, achievements: string[] }) => (
  <div className="bg-[#112240] p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-2xl font-bold text-gray-100 mb-2">{company}</h3>
    <p className="text-blue-400 mb-4">{period}</p>
    <ul className="space-y-3">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
          <span className="text-gray-300">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      company: 'State Bank',
      period: 'Mar 2023 - Present',
      achievements: [
        'CI/CD pipeline development',
        'OpenShift container management',
        'AWS infrastructure management'
      ]
    },
    {
      company: 'BSURE',
      period: 'Jan 2021 - Feb 2023',
      achievements: [
        '80% deployment time reduction',
        '99.9% server uptime achievement',
        'Infrastructure monitoring implementation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Work Experience</h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}