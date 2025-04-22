import React from 'react';

type ToastProps = {
  message: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'info' | 'success' | 'error' | 'warning';
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  fullWidth?: boolean;
  darkMode?: boolean;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  size = 'md',
  variant = 'info',
  borderStyle = 'solid',
  fullWidth = false,
  darkMode = false,
}) => {
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-3',
    lg: 'text-lg py-3 px-4',
  };

  const variantClasses = {
    info: 'bg-blue-100 text-blue-600 border-blue-500',
    success: 'bg-green-100 text-green-600 border-green-500',
    error: 'bg-red-100 text-red-600 border-red-500',
    warning: 'bg-yellow-100 text-yellow-600 border-yellow-500',
  };

  const borderStyleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  const darkModeClasses = darkMode
    ? 'dark:bg-gray-800 dark:text-white dark:border-gray-500'
    : '';

  return (
    <div
      className={`rounded-md ${widthClass} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${borderStyleClasses[borderStyle]} ${darkModeClasses} border px-4 py-2`}
    >
      {message}
    </div>
  );
};
