import { CardProps } from "@/types";

export default function Card({
    children,
    cssString
}: CardProps){
    return(
        <div className={`color-primary dark:color-dark-primary  ${cssString ?? ""}`}>

        </div>
    )
}