import React from 'react';
import { Cloud, Container, GitBranch, Terminal, LineChart, Code } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills, index }: { icon: any, title: string, skills: string[], index: number }) => (
  <div 
    className="group p-6 bg-[#112240] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      <h3 className="text-xl font-semibold ml-3 text-gray-100">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, idx) => (
        <li 
          key={skill}
          className="text-gray-300 flex items-center space-x-2 group-hover:text-gray-100 transition-colors duration-300"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></span>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud',
      skills: ['AWS', 'Azure']
    },
    {
      icon: Container,
      title: 'Containers',
      skills: ['Docker', 'Kubernetes', 'ECS']
    },
    {
      icon: GitBranch,
      title: 'CI/CD',
      skills: ['Jenkins', 'GitLab']
    },
    {
      icon: Terminal,
      title: 'IaC',
      skills: ['Terraform', 'CloudFormation']
    },
    {
      icon: LineChart,
      title: 'Monitoring',
      skills: ['Prometheus', 'Grafana']
    },
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'Bash']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-100">Technical Expertise</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Specialized in modern DevOps tools and technologies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}