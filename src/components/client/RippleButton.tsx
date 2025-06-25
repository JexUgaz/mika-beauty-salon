import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  children: React.ReactNode;
}

export const RippleButton: React.FC<Props> = ({
  children,
  rippleColor = "bg-white",
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const container = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.className = `absolute ${rippleColor} rounded-full animate-ripple pointer-events-none`;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    onClick?.(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
