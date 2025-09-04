import { ReactNode } from "react"

interface ButtonProps{
    title: string,
    link: string,
    cssString?: string,
}

interface CardProps{
    children: ReactNode,
    cssString?: string,
}

export type { ButtonProps, CardProps }