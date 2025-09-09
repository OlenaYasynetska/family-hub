import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarColor: string;
  className?: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  avatarColor,
  className = '' 
}: TestimonialCardProps) {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer group ${className}`}>
      <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
        {quote}
      </p>
      <div className="flex items-center">
        <div className={`w-10 h-10 ${avatarColor} rounded-full mr-3 group-hover:opacity-80 transition-colors duration-300`}></div>
        <div>
          <p className="font-semibold group-hover:text-gray-900 transition-colors duration-300">
            {author}
          </p>
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
