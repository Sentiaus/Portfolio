import Image from 'next/image';

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="hidden sm:block w-full h-full  md:w-1/4 lg:w-2/3">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full" 
          style={{ minWidth: "400px", minHeight: "800px" }} 
          title="Resume"
        />
      </div>
      <div className="block sm:hidden w-full h-full p-4 bg-slate-400">
        <Image 
          src="/resume.jpg" 
          alt="Resume of Victor Fawole" 
          layout="responsive" 
          width={500} 
          height={800} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Resume;