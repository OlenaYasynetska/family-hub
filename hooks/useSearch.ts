import { useState, useCallback } from 'react';

interface UseSearchOptions {
  onSearch?: (query: string) => void;
  debounceMs?: number;
}

/**
 * Хук для управления поиском с дебаунсом
 * Полезен для поисковых полей, фильтрации и т.д.
 */
export function useSearch({ onSearch, debounceMs = 300 }: UseSearchOptions = {}) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(true);
    
    // Дебаунс для оптимизации
    const timeoutId = setTimeout(() => {
      onSearch?.(searchQuery);
      setIsSearching(false);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [onSearch, debounceMs]);

  const clearSearch = useCallback(() => {
    setQuery('');
    onSearch?.('');
  }, [onSearch]);

  return {
    query,
    setQuery,
    handleSearch,
    clearSearch,
    isSearching
  };
}
