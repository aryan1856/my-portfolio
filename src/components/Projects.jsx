import React from 'react'
import { GoRocket } from "react-icons/go";
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {

    var dummyProjects = [{
        image: "/images/image_bethefix.png",
        title: "BeTheFix",
        contest: "Hack36 8.0 MNNIT",
        duration: "36 hours",
        info: [
            "Civic problems often go unnoticed due to poor reporting systems",
            "Our solution enables easy reporting, tracking, and updates on local issues.",
            "Encourages citizen engagement and collaboration.",
            "Promotes accountability and volunteer participation for faster resolution."
        ],
        techstack: [
            "React", "JavaScript", "Tailwindcss", "Cloudinary", "MongoDB", "ExpressJs", "NodeJs"
        ],
        repo: "https://github.com/aryan1856/hack-36-mnnit"
    }, {
        image: "/images/image_vellura.png",
        title: "Vellura",
        contest: "HackJMI 2025",
        duration: "48 hours",
        info: [
            "Vellura offers instant, stigma-free mental health help anytime.",
            "Mood tracking, journaling, and tailored coping strategies.",
            "Includes meditation, affirmations, and self-care resources.",
            "Connects users with a supportive peer network."
        ],
        techstack: [
            "React", "JavaScript", "Tailwindcss", "Cloudinary", "MongoDB", "ExpressJs", "NodeJs", "OAuth 2.0"
        ],
        repo: "https://github.com/aryan1856/-Mental-Health-Project-"
    }, {
        image: "/images/image_lifelens_blog.png",
        title: "LifeLens Blog",
        contest: "Practice Project",
        duration: "May 2024",
        info: [
            " Built with the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack functionality.",
            "Includes authentication, commenting, and post tagging.",
            "Supports full CRUD operations and post search by tags.",
            "Mobile-responsive design with pagination for smooth navigation."
        ],
        techstack: [
            "React", "JavaScript", "Tailwindcss", "MongoDB", "ExpressJs", "NodeJs"
        ],
        repo: "https://github.com/aryan1856/Blog-Application-2024"
    }];

    return (
        <div id='projects' className='bg-black min-h-screen'>
            <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-[Dancing_Script] tracking-wide font-bold gap-4 p-4">
                <h1 className='text-white'>Projects</h1>
                <GoRocket className='animate-pulse text-cyan-400' />
            </div>

            {/* Responsive Grid for Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8">
                {dummyProjects.map((element, index) => (
                    <ProjectCard key={index} project={element} />
                ))}
            </div>
        </div>
    )
}

export default Projects;
