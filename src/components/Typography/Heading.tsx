import React from 'react';
import clsx from 'clsx';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  // Use React.ElementType to dynamically choose the correct HTML element (e.g., h1, h2, h3)
  const Tag: React.ElementType = `h${level}`;

  const baseStyles = 'text-foreground font-bold';
  const sizes = {
    1: 'text-4xl md:text-5xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  return <Tag className={clsx(baseStyles, sizes[level], className)}>{children}</Tag>;
};
