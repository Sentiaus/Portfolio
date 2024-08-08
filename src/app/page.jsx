import BackToTop from "@/components/backToTop/BackToTop";
import About from "@/components/mainpage/about/about";
import BigAssHead from "@/components/mainpage/bigasshead/bigasshead";
import Projects from "@/components/mainpage/projects/projects";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <BigAssHead />
            <About />
            <Projects />
            {/* <BackToTop /> */}
        </div>
    );
};

export default Home;