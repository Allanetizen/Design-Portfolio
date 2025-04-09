'use client';

import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ title, company, period, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-200"></div>
      )}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-gray-500">{period}</span>
        </div>
        <h4 className="text-lg text-purple-600 mb-2">{company}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
} 