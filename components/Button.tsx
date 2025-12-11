import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold pixel-font transition-transform active:translate-y-1 active:shadow-none border-2 border-black relative";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-400 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-yellow-400 hover:bg-yellow-300 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    danger: "bg-red-500 hover:bg-red-400 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  };

  const sizes = {
    sm: "px-3 py-1 text-lg",
    md: "px-6 py-3 text-2xl",
    lg: "px-8 py-4 text-3xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};