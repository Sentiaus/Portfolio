import Card from "@/components/Card";
import Button from "@/components/Button";
import Image from "next/image";
import { AboutMe } from "@/constants";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 lg:py-8 gap-16 sm:px-20 ">
        <div className="flex flex-1 w-full h-screen lg:h-full gap-4 flex-col lg:flex-row lg:rounded-md overflow-hidden bg-primary dark:bg-dark-primary">
          <Card className="relative flex-1 min-h-[33vh]">
            <Image
                src="/GradPic.png"
                alt="Picture of Victor Fawole"
                fill
                className="object-cover"
            />
          </Card>
          <Card className="flex-1 flex flex-col mx-8">
            <div className="flex items-center justify-start flex-1  pt-8">
                <Button title="Back" link="/" className="w-24 md:w-32"></Button>
            </div>
            <div className="my-16">
                <h1 className="text-2xl md:text-4xl lg:text-6xl border-b pb-2">About</h1>
                <p className="whitespace-pre-line text-base leading-relaxed py-2">{AboutMe}</p>
            </div>
          </Card>
        </div>
      </div>
  );
}