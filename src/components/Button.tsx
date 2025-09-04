import Link from "next/link"
import { ButtonProps } from "@/types"


export default function Button({title, link, cssString}: ButtonProps) {

    return (
        <Link href={link} className={`bg-button dark:bg-dark-button px-4 py-2 rounded-lg hover:bg-primary ${cssString ?? ""}`}>
            {title}
        </Link>
    )
}