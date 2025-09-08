'use client';

import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../Header/Logo/Logo';
import SearchSection from '../Header/SearchSection/SearchSection';
import Navigation from '../Header/Navigation/Navigation';
import SignInButton from '../Header/SignInButton/SignInButton';
import { useToggle } from '../../hooks/useToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useToggle(false);

  return (
    <header className={`sticky top-0 z-50 bg-purple-50 border-b border-purple-600 w-full ${className}`}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />
          
          {/* Search Section */}
          <SearchSection />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Sign In Button */}
          <SignInButton />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          {/* Top Row - Logo and Menu Button */}
          <div className="flex items-center justify-between py-4">
            <Logo />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-yellow-400 text-gray-800 hover:bg-yellow-500 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Search Section - Always visible on mobile */}
          <div className="pb-4">
            <SearchSection />
          </div>

          {/* Mobile Menu - Collapsible */}
          {isMobileMenuOpen && (
            <div className="border-t border-purple-200 pt-4 pb-4 space-y-4">
              {/* Navigation */}
              <Navigation className="flex-col space-y-4 space-x-0" />
              
              {/* Sign In Button */}
              <div className="pt-2">
                <SignInButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
