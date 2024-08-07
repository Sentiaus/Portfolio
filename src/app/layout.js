import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default:"Victor Fawole",
    template: "%s | Victor Fawole",
  },
  description: "Student, Software Engineer, Reader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={montserrat.className}>
        <div className="w-full bg-slate-100 antialiased">
          <div className="container mx-auto text-slate-700">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        </body>
        
        
        
    </html>
  );
}
