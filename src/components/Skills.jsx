import React from 'react'
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { DiGithubBadge, DiHtml5, DiCss3, DiJsBadge } from "react-icons/di";
import { TbCircleLetterC, TbDeviceImacCode } from "react-icons/tb";
import { FaFacebookSquare, FaGitAlt, FaStackOverflow, FaReact, FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb, SiSpringboot, SiTailwindcss } from "react-icons/si";
import { useInView } from 'react-intersection-observer'



const Skills = () => {
    const SkillIcon = ({ Icon, label }) => (
        <li className="relative group flex flex-col items-center">
            <Icon className="text-3xl sm:text-5xl hover:text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer" />
            <span className="absolute bottom-[-2rem] text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {label}
            </span>
        </li>
    );

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01,
    })

    const skills = [
        { Icon: DiHtml5, label: 'HTML5' },
        { Icon: DiCss3, label: 'CSS3' },
        { Icon: DiJsBadge, label: 'JavaScript' },
        { Icon: TbCircleLetterC, label: 'C Language' },
        { Icon: FaGitAlt, label: 'Git' },
        { Icon: FaReact, label: 'React' },
        { Icon: FaJava, label: 'Java' },
        { Icon: FaNode, label: 'Node.js' },
        { Icon: SiMongodb, label: 'MongoDB' },
        { Icon: SiSpringboot, label: 'Spring Boot' },
        { Icon: SiTailwindcss, label: 'Tailwind CSS' }
    ];

    const proficient = "text-xl font-serif hover:scale-125 transition-transform duration-300 cursor-pointer";

    return (
        <div className={`bg-gray-200 sm:min-h-190 flex items-center justify-center flex-col w-full p-4 `}>
            <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-[Dancing_Script] tracking-wide font-bold gap-4 p-4">
                <h1>Skills</h1>
                <LiaLaptopCodeSolid className='animate-pulse' />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center w-[90%]'>
                <div ref={ref} className={`m-4 min-w-1/2 min-h-1/2 flex items-center justify-center ${inView ? 'animate-[slide_1.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <img className='h-46 sm:h-100' src="/images/develop-web.gif" alt="skills" />
                </div>
                <div className={`min-w-1/2 ${inView ? 'animate-[slide-right_1.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center flex-col p-4">
                        <p className='font-bold text-xl sm:text-4xl text-cyan-400 font-serif'>Collaborated With</p>
                        <ul className="flex flex-wrap items-center justify-center m-10 gap-6">
                            {skills.map(({ Icon, label }, index) => (
                                <SkillIcon key={index} Icon={Icon} label={label} />
                            ))}
                        </ul>

                    </div>
                    <div className="flex items-center justify-center flex-col p-4">
                        <p className='font-bold text-xl sm:text-4xl text-cyan-400 font-serif'>Proficient in</p>
                        <ul className='flex flex-col m-4 gap-3'>
                            <li className={proficient}>C Programming</li>
                            <hr className="border-gray-400 my-1" />
                            <li className={proficient}>Java</li>
                            <hr className="border-gray-400 my-1" />
                            <li className={proficient}>Web Programming</li>
                            <hr className="border-gray-400 my-1" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills