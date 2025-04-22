import React from 'react';
import clsx from 'clsx';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export const Label: React.FC<BaseProps> = ({ children, className }) => (
  <label className={clsx('text-sm font-medium text-foreground', className)}>{children}</label>
);

export const HelperText: React.FC<BaseProps> = ({ children, className }) => (
  <p className={clsx('text-xs text-muted-foreground', className)}>{children}</p>
);

export const Caption: React.FC<BaseProps> = ({ children, className }) => (
  <span className={clsx('text-xs text-muted-foreground italic', className)}>{children}</span>
);
