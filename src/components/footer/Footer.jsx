
import Github from "../foreignLinks/Github";
import Linkedin from "../foreignLinks/Linkedin";

const Footer   = () => {
    return (
        <div className="h-24 flex flex-col items-center justify-center space-y-2 py-20">
            <h1 className="font-bold text-xl md:text-3xl">Victor Fawole</h1>
            <div className="flex space-x-4">
                <Github />
                <Linkedin />
            </div>
                    
                
            
        </div>
    )
}

export default Footer;