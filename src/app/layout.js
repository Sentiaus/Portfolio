import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Victor Fawole",
    template: "%s | Victor Fawole",
  },
  description: "Victor Fawole's site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className="w-full bg-blue-400 antialiased">
          <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        </body>
        
        
        
    </html>
  );
}
