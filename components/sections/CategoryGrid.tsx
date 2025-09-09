import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import SectionHeader from '../ui/SectionHeader';

interface Category {
  icon: string;
  title: string;
  bgColor: string;
  textColor?: string;
}

interface CategoryGridProps {
  categories: Category[];
  className?: string;
}

export default function CategoryGrid({ 
  categories, 
  className = '' 
}: CategoryGridProps) {
  return (
    <div className={className}>
      <SectionHeader 
        title="Browse by Category"
        subtitle="Find exactly what you're looking for."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            bgColor={category.bgColor}
            textColor={category.textColor}
          />
        ))}
      </div>

      {/* See all categories button */}
      <div className="text-center mb-12">
        <button className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 transition-all duration-300">
          See all categories
        </button>
      </div>
    </div>
  );
}
