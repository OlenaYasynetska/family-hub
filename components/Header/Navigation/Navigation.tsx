'use client';

import React from 'react';
import Link from 'next/link';
import { useActiveRoute } from '../../../hooks/useActiveRoute';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const { getActiveStyles } = useActiveRoute();

  const activeStyles = 'text-purple-600 font-semibold text-lg';
  const inactiveStyles = 'text-gray-700 hover:text-purple-600 text-base';

  return (
    <nav className={`flex space-x-6 ${className}`}>
      <Link 
        href="/" 
        className={`transition-all duration-200 font-medium py-2 px-3 rounded-lg hover:bg-purple-100 ${getActiveStyles('/', activeStyles, inactiveStyles)}`}
      >
        Home
      </Link>
      <Link 
        href="/detail" 
        className={`transition-all duration-200 font-medium py-2 px-3 rounded-lg hover:bg-purple-100 ${getActiveStyles('/detail', activeStyles, inactiveStyles)}`}
      >
        Detail page
      </Link>
    </nav>
  );
}
