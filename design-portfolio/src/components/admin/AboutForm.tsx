'use client';

import React, { useState } from 'react';

interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export default function AboutForm() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo>({
    name: '',
    title: '',
    bio: '',
    imageUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof AboutInfo, value: string) => {
    setAboutInfo({
      ...aboutInfo,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this to your backend
      console.log('Updating about information:', aboutInfo);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('About information updated successfully!');
    } catch (error) {
      console.error('Error updating about information:', error);
      alert('Failed to update about information');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Manage About Section</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={aboutInfo.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={aboutInfo.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            value={aboutInfo.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
          <input
            type="url"
            value={aboutInfo.imageUrl}
            onChange={(e) => handleChange('imageUrl', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {aboutInfo.imageUrl && (
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Image Preview</label>
            <img
              src={aboutInfo.imageUrl}
              alt="Profile preview"
              className="mt-2 h-32 w-32 object-cover rounded-full"
            />
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Updating...' : 'Update About Section'}
          </button>
        </div>
      </form>
    </div>
  );
} 