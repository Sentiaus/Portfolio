import Link from "next/link"

interface ButtonProps {
  title: string;
  link: string;
  target?: string;
  className?: string;
}


export default function Button({title, link, target, className}: ButtonProps) {

    return (
        <Link href={link} target={target} className={`px-4 py-2 rounded-lg 
        border 
        border-dark-primary hover:border-[#c5ac91] hover:text-[#C68A39] 
        dark:border-primary dark:hover:border-[#C68A39]
        text-center
        transition-colors duration-300 ease-in-out
        ${className ?? ""}`}>
            {title}
        </Link>
    )
}