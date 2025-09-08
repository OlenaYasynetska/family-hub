import { useState, useCallback } from 'react';

interface UseButtonOptions {
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

/**
 * Хук для управления состоянием кнопки (loading, disabled, success)
 * Полезен для кнопок с асинхронными действиями
 */
export function useButton({ onClick, disabled = false }: UseButtonOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = useCallback(async () => {
    if (disabled || isLoading) return;

    try {
      setIsLoading(true);
      setIsSuccess(false);
      
      await onClick?.();
      
      setIsSuccess(true);
      // Сбрасываем success через 2 секунды
      setTimeout(() => setIsSuccess(false), 2000);
    } catch (error) {
      console.error('Button action failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [onClick, disabled, isLoading]);

  const getButtonStyles = (baseStyles: string) => {
    if (disabled) {
      return `${baseStyles} opacity-50 cursor-not-allowed`;
    }
    if (isLoading) {
      return `${baseStyles} opacity-75 cursor-wait`;
    }
    if (isSuccess) {
      return `${baseStyles} bg-green-500 text-white`;
    }
    return baseStyles;
  };

  return {
    isLoading,
    isSuccess,
    isDisabled: disabled,
    handleClick,
    getButtonStyles
  };
}
