import { ReactNode } from "react"

interface ButtonProps{
    title: string,
    link: string,
    className?: string,
}

interface CardProps{
    children?: ReactNode,
    className?: string,
}

interface LinkInfo {
  type: IconType;
  url: string;
  label: string;             // For accessibility / tooltips
  size?: number;             // Icon size in pixels, optional
  color?: string;            // Default color (Tailwind class or hex)
  hoverColor?: string;       // Hover color (Tailwind class or hex)
}

type IconType = "linkedin" | "github" | "mail";

interface SocialIconProps {
  type: IconType;
  size?: number; // optional size in pixels
  className?: string; // optional extra classes
}

export type { ButtonProps, CardProps, LinkInfo, SocialIconProps }