'use client';

import React from 'react';
import { useButton } from '../../../hooks/useButton';

interface SignInButtonProps {
  className?: string;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

export default function SignInButton({ 
  className = '',
  onClick,
  disabled = false
}: SignInButtonProps) {
  const { isLoading, isSuccess, handleClick, getButtonStyles } = useButton({ 
    onClick, 
    disabled 
  });

  const baseStyles = 'border border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors bg-white';

  return (
    <button 
      className={`${getButtonStyles(baseStyles)} ${className}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? 'Signing in...' : isSuccess ? '✓ Signed in' : 'Sign in'}
    </button>
  );
}
