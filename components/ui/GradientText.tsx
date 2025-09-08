import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'purple-blue' | 'blue-cyan' | 'cyan-purple' | 'rainbow';
}

const gradients = {
  'purple-blue': 'linear-gradient(135deg, #7c3aed, #3b82f6)',
  'blue-cyan': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'cyan-purple': 'linear-gradient(135deg, #06b6d4, #7c3aed)',
  'rainbow': 'linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)'
};

export default function GradientText({ 
  children, 
  className = '', 
  gradient = 'rainbow' 
}: GradientTextProps) {
  return (
    <span 
      className={className}
      style={{
        background: gradients[gradient],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {children}
    </span>
  );
}
