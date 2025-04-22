import React from 'react';
import clsx from 'clsx';

type ParagraphProps = {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ size = 'md', children, className }) => {
  const baseStyles = 'text-foreground';
  const sizes = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
  };

  return <p className={clsx(baseStyles, sizes[size], className)}>{children}</p>;
};
