'use client';

import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useSearch } from '../../hooks/useSearch';
import { useToggle } from '../../hooks/useToggle';
import { Service } from '../../types';

interface SearchAndFilterProps {
  services: Service[];
  onFilteredServices: (services: Service[]) => void;
  className?: string;
}

export default function SearchAndFilter({ 
  services, 
  onFilteredServices, 
  className = '' 
}: SearchAndFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState<number>(0);
  
  const { isOpen: showFilters, toggle: toggleFilters } = useToggle(false);
  const { query, setQuery, handleSearch } = useSearch({
    onSearch: () => {
      // Фильтрация будет происходить в useMemo
    }
  });

  // Получаем уникальные категории и локации
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(services.map(service => service.category)));
    return ['all', ...uniqueCategories];
  }, [services]);

  const locations = useMemo(() => {
    const uniqueLocations = Array.from(new Set(services.map(service => service.location)));
    return ['all', ...uniqueLocations];
  }, [services]);

  // Фильтрация услуг
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Поиск по тексту
      const matchesSearch = !query || 
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        service.category.toLowerCase().includes(query.toLowerCase()) ||
        service.provider.toLowerCase().includes(query.toLowerCase());

      // Фильтр по категории
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

      // Фильтр по локации
      const matchesLocation = selectedLocation === 'all' || service.location === selectedLocation;

      // Фильтр по цене
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];

      // Фильтр по рейтингу
      const matchesRating = service.rating >= minRating;

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice && matchesRating;
    });
  }, [services, query, selectedCategory, selectedLocation, priceRange, minRating]);

  // Обновляем отфильтрованные услуги
  React.useEffect(() => {
    onFilteredServices(filteredServices);
  }, [filteredServices, onFilteredServices]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('all');
    setPriceRange([0, 1000]);
    setMinRating(0);
    setQuery('');
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
      {/* Поисковая строка */}
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск услуг: няня, праздник, репетитор..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
          />
        </div>
      </form>

      {/* Кнопка фильтров */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={toggleFilters}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <FunnelIcon className="h-5 w-5" />
          <span>Фильтры</span>
          {showFilters && (
            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {filteredServices.length}
            </span>
          )}
        </button>
        
        <button
          onClick={clearFilters}
          className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
        >
          Очистить все
        </button>
      </div>

      {/* Панель фильтров */}
      {showFilters && (
        <div className="border-t pt-4 space-y-4">
          {/* Категории */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Категория
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Все' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Локации */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Локация
            </label>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedLocation === location
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location === 'all' ? 'Все' : location}
                </button>
              ))}
            </div>
          </div>

          {/* Цена */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Цена: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>

          {/* Рейтинг */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Минимальный рейтинг: {minRating}⭐
            </label>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  onClick={() => setMinRating(rating)}
                  className={`text-2xl transition-colors ${
                    rating <= minRating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Результаты */}
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600">
          Найдено услуг: <span className="font-semibold text-purple-600">{filteredServices.length}</span>
        </p>
      </div>
    </div>
  );
}
