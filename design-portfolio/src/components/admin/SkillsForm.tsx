'use client';

import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default function SkillsForm() {
  const [categories, setCategories] = useState<SkillCategory[]>([
    {
      name: '',
      skills: [{ name: '', level: 0 }],
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddCategory = () => {
    setCategories([
      ...categories,
      {
        name: '',
        skills: [{ name: '', level: 0 }],
      },
    ]);
  };

  const handleRemoveCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleAddSkill = (categoryIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].skills.push({ name: '', level: 0 });
    setCategories(newCategories);
  };

  const handleRemoveSkill = (categoryIndex: number, skillIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].skills = newCategories[categoryIndex].skills.filter(
      (_, i) => i !== skillIndex
    );
    setCategories(newCategories);
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newCategories = [...categories];
    newCategories[index].name = value;
    setCategories(newCategories);
  };

  const handleSkillChange = (
    categoryIndex: number,
    skillIndex: number,
    field: keyof Skill,
    value: string | number
  ) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].skills[skillIndex] = {
      ...newCategories[categoryIndex].skills[skillIndex],
      [field]: value,
    };
    setCategories(newCategories);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this to your backend
      console.log('Updating skills:', categories);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Skills updated successfully!');
    } catch (error) {
      console.error('Error updating skills:', error);
      alert('Failed to update skills');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Skills</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Category {categoryIndex + 1}</h3>
              <button
                type="button"
                onClick={() => handleRemoveCategory(categoryIndex)}
                className="text-red-600 hover:text-red-800"
              >
                Remove Category
              </button>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                value={category.name}
                onChange={(e) => handleCategoryChange(categoryIndex, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="border rounded p-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-md font-medium">Skill {skillIndex + 1}</h4>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(categoryIndex, skillIndex)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove Skill
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skill Name</label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(categoryIndex, skillIndex, 'name', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skill Level (0-100)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(categoryIndex, skillIndex, 'level', parseInt(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => handleAddSkill(categoryIndex)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Skill
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddCategory}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Category
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Updating...' : 'Update Skills'}
          </button>
        </div>
      </form>
    </div>
  );
} 