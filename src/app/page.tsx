import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { LinkInfo } from "@/types";
import SocialIcon from "@/components/SocialIcons";

export default function Home() {
  const linkInfo: LinkInfo[] = [
    {
      type: "linkedin",
      url: "https://linkedin.com/in/victor-fawole",
      label: "LinkedIn",
      size: 20,
    },
    {
      type: "github",
      url: "https://github.com/sentiaus",
      label: "GitHub",
      size: 22,
    },
    {
      type: "mail",
      url: "mailto:victorafawole@gmail.com",
      label: "Email",
    },
  ]

  return (
  <div className="flex flex-col items-center justify-center min-h-screen px-8 lg:py-8 gap-16 sm:px-20 ">
    <div className="flex flex-1 w-full max-w-6xl md:max-h-[1000px] h-screen lg:h-full gap-4 flex-col lg:flex-row md:rounded-md overflow-hidden bg-primary dark:bg-dark-primary">
      <Card className="relative flex-1 min-h-[33vh]">
        <Image  
          src="/GradPic.png"
          alt="Picture of Victor Fawole"
          fill
          className="object-cover"
        />
      </Card>
      <Card className="flex-1 flex flex-col items-center">
        <div className="flex-1 flex flex-col py-4 items-center justify-center text-center flex-[1_1_50%]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl pt-4 ">Victor Fawole</h1>
          <div className="my-8 border-b w-32"></div>
          <h3 className="text-sm md:text-xl">The Ohio State University</h3>
          <h3 className="text-xs md:text-lg">Computer Science and Engineering, B.S.</h3>
        </div>
        <div className="flex flex-col flex-1 flex-[2_1_50%] justify-start items-center">
          <Button title="About" link="/about" className="w-32 md:w-48 my-2"></Button>
          <Button title="Resume" link="/Resume.pdf" target="_blank" className="w-32 md:w-48 my-2"></Button>
          {/* <Button title="Projects" link="/projects" className="w-32 md:w-48 my-2"></Button> */}
          <div className="flex justify-center gap-4 my-2"> 
            {linkInfo.map((link)=>
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noreferrer" 
              aria-label={link.label}
              >
              <SocialIcon type={link.type} size={link.size} />
            </a>)}
          </div>
        </div>
      </Card>
    </div>
  </div>
  );
}
