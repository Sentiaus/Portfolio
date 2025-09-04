import Image from "next/image";
import Button from "@/components/Button";
import { ButtonProps } from "@/types";

const buttonProps:ButtonProps = {
  title: "BRUH",
  link: "https://www.linkedin.com/in/victor-fawole"
}

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button {...buttonProps}></Button>
    </div>
  );
}