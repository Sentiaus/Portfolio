import Image from "next/image";
import Button from "@/components/Button";
import { ButtonProps } from "@/types";
import SocialIcon from "@/components/SocialIcons";

const buttonProps:ButtonProps = {
  title: "BRUH",
  link: "https://www.linkedin.com/in/victor-fawole"
}

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <a href="https://linkedin.com/in/victor-fawole" target="_blank" rel="noreferrer">
         <SocialIcon type="linkedin" />
    </a>
    </div>
  );
}