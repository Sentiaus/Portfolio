import Link from "next/link";
import { BxBxlLinkedin } from "../Linkedin";

const Footer   = () => {
    return (<div className="h-24 flex flex-col items-center justify-center space-y-2">
        <h1 className="font-bold text-3xl">Victor Fawole</h1>
        <div className="rounded-full bg-black p-1">
            <Link href="https://www.linkedin.com/in/victor-fawole/">
                <BxBxlLinkedin/>
            </Link>
            </div>
        
        </div>)
}

export default Footer;