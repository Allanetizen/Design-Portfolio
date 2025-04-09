'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="text-white hover:text-purple-200 transition">
              About
            </Link>
            <Link href="#experience" className="text-white hover:text-purple-200 transition">
              Experience
            </Link>
            <Link href="#skills" className="text-white hover:text-purple-200 transition">
              Skills
            </Link>
            <Link href="#projects" className="text-white hover:text-purple-200 transition">
              Projects
            </Link>
            <Link href="#contact" className="text-white hover:text-purple-200 transition">
              Contact
            </Link>
            <Link 
              href="/admin/login" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 