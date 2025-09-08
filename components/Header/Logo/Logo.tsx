'use client';

import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <h1 
        className="text-3xl font-bold"
        style={{
          background: 'linear-gradient(to right, #9333ea, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Yayando
      </h1>
    </div>
  );
}
