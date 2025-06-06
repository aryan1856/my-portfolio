import React from 'react'
import { GoRocket } from "react-icons/go";
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {
    const dummyProject = {
        image: "/images/bg1.jpeg",
        title: "AI-powered Chatbot",
        contest: "Global Hackathon 2025",
        duration: "48 hours",
        info: [
            "Natural language processing",
            "Context-aware responses",
            "Multi-language support",
            "Deployed on AWS"
        ],
        techstack : [
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "NodeJs",
            "React",
            "ExpressJS",
            "TailwindCSS",
            "JavaScript",
            "MongoDB",
            "NodeJs",
            "React",
            "ExpressJS"
        ],
        repo : "www.github.com"
    }

    return (
        <div className='bg-black min-h-screen'>
            <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-[Dancing_Script] tracking-wide font-bold gap-4 p-4">
                <h1 className='text-white'>Projects</h1>
                <GoRocket className='animate-pulse text-cyan-400' />
            </div>

            {/* Responsive Grid for Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8">
                <ProjectCard project={dummyProject} />
                <ProjectCard project={dummyProject} />
                <ProjectCard project={dummyProject} />
                <ProjectCard project={dummyProject} />
                <ProjectCard project={dummyProject}/>
                <ProjectCard project={dummyProject}/>
                {/* Add more cards and layout will adapt */}
            </div>
        </div>
    )
}

export default Projects;
