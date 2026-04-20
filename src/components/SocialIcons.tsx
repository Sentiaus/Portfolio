import React from "react";

type IconType = "linkedin" | "github" | "mail";

interface SocialIconProps {
  type: IconType;
  size?: number;
  className?: string;
}


export default function SocialIcon({
  type,
  size = 24,
  className = "",
}: SocialIconProps) {
  const baseClasses = `hover:text-[#C68A39] transition-colors ${className}`;

  switch (type) {
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={size}
          height={size}
          className={baseClasses}
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.4 4.65-2.4 5 0 5.9 3.3 5.9 7.6V24h-5v-7c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.75 1.85-2.75 3.8V24h-5V8z" />
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={size}
          height={size}
          className={baseClasses}
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.01-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.84 1.24 1.84 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.41c1.02.01 2.04.14 3 .41 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={size}
          height={size}
          className={baseClasses}
        >
          <path d="M12 13.065l-11.5-7.065v14h23v-14l-11.5 7.065zm0-2.13l11.5-7.935h-23l11.5 7.935z" />
        </svg>
      );
    default:
      return null;
  }
}
