import React from 'react';

type TextInputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  fullWidth?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  disabled,
  size = 'md',
  color = 'primary',
  borderStyle = 'solid',
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-3',
    lg: 'text-lg py-3 px-4',
  };

  const colorRingClasses = {
    primary: 'focus:ring-blue-500',
    secondary: 'focus:ring-gray-500',
    accent: 'focus:ring-green-500',
  };

  const borderColorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    accent: 'border-green-500',
  };

  const borderStyleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  const darkModeClasses = `
    dark:bg-gray-800 
    dark:text-white 
    dark:placeholder-white
  `;

  return (
    <div className={`space-y-1 ${widthClass}`}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={`
          bg-white
          placeholder-white
          rounded-md
          border
          ${sizeClasses[size]}
          ${borderColorClasses[color]}
          ${borderStyleClasses[borderStyle]}
          ${colorRingClasses[color]}
          ${darkModeClasses}
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none focus:ring-2'}
        `}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
