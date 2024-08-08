import Image from "next/image";
const BigAssHead = () => {
    return (
        <div className="h-screen">
            
            <div className="absolute inset-0 bg-black opacity-50">
                <Image src="/Me.jpg" alt="Picture of Victor Fawole" layout="fill" objectFit="cover" className="w-full h-full object-cover" />
            </div>

            <div className="absolute inset-8 md:inset-16 lg:inset-20 xl:inset-24 flex flex-col items-start justify-center pl-8">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Victor Fawole
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl">The Ohio State University</h2>
            </div>
        </div>
    )
};

export default BigAssHead;