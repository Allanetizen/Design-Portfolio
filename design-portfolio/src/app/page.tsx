'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import SkillsSection from '../components/SkillsSection';
import ContactForm from '../components/ContactForm';

// Sample data - replace with your actual data
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project.',
    imageUrl: '/images/project1.jpg',
    projectUrl: '#',
    tags: ['UI/UX', 'Web Design', 'React'],
  },
  // Add more projects as needed
];

const experience = [
  {
    title: 'Senior Designer',
    company: 'Design Studio',
    period: '2020 - Present',
    description: 'Leading design projects and collaborating with cross-functional teams.',
  },
  // Add more experience items as needed
];

const skills = [
  {
    name: 'Design Tools',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Sketch', level: 80 },
    ],
  },
  {
    name: 'Development',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-xl mb-8">Design Portfolio</p>
          <div className="space-x-4">
            <Link 
              href="#projects" 
              className="px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition"
              scroll={false}
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-600 transition"
              scroll={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            [Your about me text here. Describe your background, passion for design, and what drives you.]
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
          <SkillsSection categories={skills} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">Email: your.email@example.com</p>
              <p className="text-gray-600 mb-2">LinkedIn: linkedin.com/in/yourprofile</p>
              <p className="text-gray-600">Location: Your Location</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
