'use client';

import React from 'react';
import SearchBar from '../../ui/SearchBar';
import LocationSelector from '../../shared/LocationSelector';

interface SearchSectionProps {
  className?: string;
  onSearch?: (query: string) => void;
  onLocationChange?: (location: string) => void;
}

export default function SearchSection({ 
  className = '',
  onSearch,
  onLocationChange
}: SearchSectionProps) {
  const handleSearch = (query: string) => {
    console.log('Поиск:', query);
    onSearch?.(query);
  };

  const handleLocationChange = (location: string) => {
    console.log('Изменена локация:', location);
    onLocationChange?.(location);
  };

  return (
    <div className={`flex items-center space-x-4 flex-1 max-w-2xl mx-8 ${className}`}>
      <LocationSelector 
        currentLocation="Moldova"
        onLocationChange={handleLocationChange}
      />
      
      <SearchBar 
        placeholder="Search services: nanny, party, tutoring..."
        onSearch={handleSearch}
      />
    </div>
  );
}