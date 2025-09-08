import React from 'react';

interface IconProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'gray' | 'purple' | 'blue';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-10 h-10'
};

const colorClasses = {
  white: 'text-white',
  gray: 'text-gray-600',
  purple: 'text-purple-600',
  blue: 'text-blue-600'
};

export default function Icon({ 
  children, 
  size = 'md', 
  color = 'gray', 
  className = '' 
}: IconProps) {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  
  return (
    <div className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </div>
  );
}
