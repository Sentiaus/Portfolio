
import Linkedin from "../linkedin/Linkedin";

const Footer   = () => {
    return (
        <div className="h-24 flex flex-col items-center justify-center space-y-2 py-20">
            <h1 className="font-bold text-xl md:text-3xl">Victor Fawole</h1>
            
                    <Linkedin />
                
            
        </div>
    )
}

export default Footer;