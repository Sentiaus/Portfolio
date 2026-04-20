import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export default function Card({
    children,
    className
}: CardProps){
    return(
        <div className={`bg-primary dark:bg-dark-primary ${className ?? ""}`}>
            {children}
        </div>
    )
}