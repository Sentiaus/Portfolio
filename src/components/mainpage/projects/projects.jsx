import Link from "next/link";

const Projects = () => {

    const projectDesc = [
        {
            name: "Buckeyes Shuffled Website",
            date: "July 2024-Present",
            description: "Website I made for my club, mainly to practice my front-end skills and to figure out routing in react without NextJS. First time I also had to account for decisions made by other people when creating a project. Gonna try to maintain it and add some cool features before I graduate and leave the club.", 
            link: "https://buckeyes-shuffled.vercel.app/",
            linkDescription: "Buckeyes Shuffled"
            },
        {
            name: "Lyrics.AI",
            date: "July 2024-Present",
            description: "I'm currently working on a little project to test myself. I'm creating a web application where a user input a question about a phrase that may appear in a song, and for the app to return the lyrics, the song link, and the number of times the lyrics occur in said song. Eventually a login system will be created so the user can see previous searches and song search rankings. My goal for this project is to learn more about web development combined with LLM API's, and the eventual maintenance and upkeep of the project.",
        },
        {
            name: "Student Unmanned Aerial Systems Competition",
            date: "June 2024",
            description: "I participated in the 2024 SUAS competition as part of Buckeye Vertical's Competition Team. My main role was building and training the multi-layer vision networks used for object detection. We used OpenCV, YOLO, and OCR for the vision models, and Unity(C#) to generate synthetic data for the models to be trained on. We eventually took 4th out of 64 teams at the competition.",
            link: "https://github.com/EashanVytla/BV-Domain-Randomization-Unity-Project",
            linkDescription: "Github",
        },

        {
            name: "Peer Evaluator",
            date: "December 2022",
            description: "As part of my Software Development and Design Class, my team and I were tasked with developing a web app that allowed for students to submit presentations and comments, and for the admin to create classes, assign assignments and grades. In this project I learned about the MVP principle, and how to use Ruby on Rails to create an app. ",
            link: "https://docs.google.com/presentation/d/1nSURnDAwyZT_5Vt5q3LNlm_nikXDGpcHd4dapGP6W3g/edit?usp=sharing",
            linkDescription: "Presentation",
        },
        {
            name: "Hack OHI/O 2022",
            date: "October 2022",
            description: "My first Hackathon! A group of friends and I decided to participate in the Amazon Challenge at my university's annual hackathon. From this I was able to learn about backend development and Amazon's lambda services.",
            link: "https://docs.google.com/presentation/d/1MX8dd3TOQR7INLnCdw4SEAlJtLiBD1KsF-Yl8Cwynig/edit?usp=sharing",
            linkDescription: "Presentation",
        },
        {
            name: "tOSU Robot Competition",
            date: "April 2022",
            description: "For my Fundamentals of Engineering Honors course, my team and I were tasked with building and programming a robot that could autonomously complete tasks at a diner: Slide tickets, deposit trays, flip burgers. Using SolidWorks, C, and a lot of woodworking, we designed the robot to navigate a course based on light sensors, a remote position system, and line following.",
            link: "https://drive.google.com/file/d/1hgebd2T2a0zfNpi4cr8DVrAPXhbhPDAG/view?usp=sharing",
            linkDescription: "Final Report",
        },
        {
            name: "Osu! in Scratch",
            date: "August 2015",
            description: "When I was 11 I was obsessed with this game called Osu! My dad saw how obsessed I was with it, and asked me to recreate it in scratch. Looking back, it's not very good, but it was one of the first games I had ever made. Hope you enjoy it!",
            link: "https://scratch.mit.edu/projects/72725524/",
            linkDescription:"Scratch Link",
        },
        
    ]
    return (
        <div className="section">
            <h1 className="section-header">Projects</h1>
                {projectDesc.map((project =>(
                    <div key={project.name} className="project-list my-4">
                        <h2 className="text-xl font-bold text-blue-400 p-2">{project.name}</h2>
                        <h3 className="font-bold rounded-s-none bg-slate-200 p-1.5 mb-2">{project.date}</h3>
                        <p className="mb-0">{project.description}</p>
                        {project.link && (<p><Link href={project.link} className="text-blue-400 underline">{project.linkDescription}</Link></p>)}
                    </div>
                )))}
        </div>
    );
};

export default Projects;