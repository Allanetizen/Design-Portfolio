'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '../../../components/admin/AdminNav';
import AboutForm from '../../../components/admin/AboutForm';
import ProjectsForm from '../../../components/admin/ProjectsForm';
import ExperienceForm from '../../../components/admin/ExperienceForm';
import SkillsForm from '../../../components/admin/SkillsForm';
import ContactForm from '../../../components/admin/ContactForm';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/check-auth');
        if (!response.ok) {
          router.push('/admin/login');
        }
      } catch (error) {
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeSection === 'about' && <AboutForm />}
          {activeSection === 'projects' && <ProjectsForm />}
          {activeSection === 'experience' && <ExperienceForm />}
          {activeSection === 'skills' && <SkillsForm />}
          {activeSection === 'contact' && <ContactForm />}
        </div>
      </div>
    </div>
  );
} 