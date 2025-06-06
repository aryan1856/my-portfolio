import React from 'react'
import { useInView } from 'react-intersection-observer'

const ProjectCard = ({ project }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01,
    })
    return (
        <div ref={ref}
            className={`
        bg-red-300 text-white flex flex-col justify-center items-center p-4 rounded-xl shadow-md
        w-full max-w-sm sm:max-w-md md:max-w-lg
        mx-auto will-change-transform transition-all duration-1000 ease-out 
      ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} hover:shadow-xl/30 transform transition-transform duration-300 hover:scale-105`
            }
        >
            <div className="flex justify-center items-center w-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-sm object-cover rounded-md"
                    style={{ aspectRatio: '4 / 3' }}
                />
            </div>
            <div className="text-lg font-bold mt-3 text-center">
                <p>{project.title}</p>
            </div>
            <div className="text-sm mt-1 text-center">
                <p>Developed at - {project.contest}</p>
            </div>
            <div className="text-sm mb-2 text-center">
                <p>Duration - {project.duration}</p>
            </div>
            <div className="text-sm text-justify w-full px-2">
                <p className="font-semibold mb-1">Key Points - </p>
                {project.info && project.info.map((point, index) => (
                    <p key={index} className="mb-1">• {point}</p>
                ))}
            </div>
            <div className="w-full px-2 mt-2">
                <p className="font-semibold mb-1 text-left">Tech Stack - </p>
                {project.techstack && project.techstack.length > 0 && (
                    <ul className="flex flex-wrap justify-center gap-1">
                        {project.techstack.map((point, index) => (
                            <li
                                key={index}
                                className="list-none rounded-lg bg-cyan-700 px-2 py-1 text-xs whitespace-nowrap"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {project.repo && (
                <div className='w-full px-2 mt-2'>
                    <p className='font-semibold mb-1'>
                        Project Link -{' '}
                        <a href={project.repo.startsWith('http') ? project.repo : `https://${project.repo}`} target="_blank" rel="noopener noreferrer" className="underline text-cyan-200 hover:text-cyan-400">
                            GitHub
                        </a>
                    </p>
                </div>
            )}

        </div>
    )
}

export default ProjectCard
