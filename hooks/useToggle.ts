import { useState, useCallback } from 'react';

/**
 * Хук для управления булевым состоянием с удобными методами
 * Полезен для модальных окон, дропдаунов, аккордеонов и т.д.
 */
export function useToggle(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setValue = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return {
    isOpen,
    toggle,
    open,
    close,
    setValue
  };
}
