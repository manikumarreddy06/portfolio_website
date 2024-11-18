import React from 'react';
import { GitBranch, Box, LineChart, Cloud } from 'lucide-react';

const ProjectCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <div 
    className="group bg-[#112240] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-6" />
        <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-blue-200 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{description}</p>
      </div>
    </div>
    <div className="mt-6 flex justify-end">
      <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
        Learn more →
      </button>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Optimization',
      description: 'Automated deployment pipeline reducing deployment time by 80% and improving reliability.'
    },
    {
      icon: Box,
      title: 'Container Orchestration Platform',
      description: 'Implemented Kubernetes cluster managing 100+ microservices with 99.9% uptime.'
    },
    {
      icon: LineChart,
      title: 'Infrastructure Monitoring Solution',
      description: 'Built comprehensive monitoring system using Prometheus and Grafana for real-time insights.'
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Migration',
      description: 'Successfully migrated legacy applications to AWS, implementing serverless architecture and reducing operational costs by 40%.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-100">Key Projects</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Showcasing impactful solutions and achievements
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}