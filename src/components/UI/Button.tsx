import React from 'react';
import { useAudio } from '../../context/AudioContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  glow = false,
  className = "",
  onClick,
  ...props
}) => {
  const { playUiSound } = useAudio();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playUiSound('click');
    if (onClick) onClick(e);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-lg select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3 text-base font-bold gap-2.5",
    xl: "px-9 py-4 text-lg font-bold gap-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-charcoal-950 font-bold hover:brightness-110 shadow-lg shadow-gold-500/20 border border-gold-300/40",
    secondary: "bg-charcoal-800/90 text-gold-300 hover:text-gold-200 hover:bg-charcoal-700 border border-gold-400/30 backdrop-blur-md shadow-md",
    gold: "bg-gold-500 text-charcoal-950 hover:bg-gold-400 font-bold shadow-md shadow-gold-500/30",
    outline: "border-2 border-gold-400/60 text-gold-300 hover:text-white hover:bg-gold-500/15 backdrop-blur-sm",
    ghost: "text-slate-300 hover:text-gold-300 hover:bg-gold-500/10",
    glass: "bg-charcoal-900/60 hover:bg-charcoal-800/80 text-marble-100 border border-gold-400/20 backdrop-blur-md hover:border-gold-400/50 shadow-dark-card"
  };

  const glowStyle = glow ? "shadow-gold-glow ring-1 ring-gold-400/50" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyle} ${className}`}
      onClick={handleClick}
      onMouseEnter={() => playUiSound('hover')}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
