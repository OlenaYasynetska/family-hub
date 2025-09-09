import React from 'react';

interface CategoryCardProps {
  icon: string;
  title: string;
  bgColor: string;
  textColor?: string;
  className?: string;
}

export default function CategoryCard({ 
  icon, 
  title, 
  bgColor, 
  textColor = 'text-white',
  className = '' 
}: CategoryCardProps) {
  return (
    <div className={`${bgColor} h-32 px-4 rounded-lg flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer group ${className}`}>
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className={`${textColor} font-semibold text-sm text-center leading-tight group-hover:scale-110 transition-transform duration-300`}>
        {title}
      </span>
    </div>
  );
}
