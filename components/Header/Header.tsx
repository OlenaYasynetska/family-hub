'use client';

import React from 'react';
import Logo from './Logo/Logo';
import SearchSection from './SearchSection/SearchSection';
import Navigation from './Navigation/Navigation';
import SignInButton from './SignInButton/SignInButton';

interface HeaderProps {
  className?: string;
  onSearch?: (query: string) => void;
  onLocationChange?: (location: string) => void;
  onSignIn?: () => void;
}

export default function Header({ 
  className = '',
  onSearch,
  onLocationChange,
  onSignIn
}: HeaderProps) {
  return (
    <header className={`bg-purple-50 sticky top-0 z-40 w-full ${className}`}>
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Logo />
          
          {/* Центральная часть - локация и поиск */}
          <SearchSection 
            onSearch={onSearch}
            onLocationChange={onLocationChange}
          />
          
          {/* Правая часть - навигация и кнопка */}
          <div className="flex items-center space-x-6">
            <Navigation />
            <SignInButton onClick={onSignIn} />
          </div>
        </div>
      </div>
      
      {/* Нижняя граница */}
      <div className="border-b border-purple-600 w-full"></div>
    </header>
  );
}