import React from 'react'
import { IoMdGitNetwork } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useInView } from 'react-intersection-observer'

const Socials = () => {
    const SkillIcon = ({ Icon, label, url }) => (
        <li className="relative group flex flex-col items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="text-3xl sm:text-5xl hover:text-blue-500 hover:scale-125 transition-transform duration-300 cursor-pointer" />
            </a>
            <span className="absolute bottom-[-2rem] text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {label}
            </span>
        </li>
    );

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01,
    });

    const skills = [
        { Icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/imhryan' },
        { Icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/aryan1856' },
        { Icon: FaGithub, label: 'GitHub', url: 'https://github.com/aryan1856' },
        { Icon: FaDiscord, label: 'Discord', url: 'https://discord.com/users/imhryan' },
        { Icon: FaXTwitter, label: 'X (Twitter)', url: 'https://twitter.com/aryan88547' },
        { Icon: FaFacebook, label: 'Facebook', url: 'https://facebook.com/aryanaryan.diwaker' },
        { Icon: MdAttachEmail, label: 'Email', url: 'mailto:diwakerryan7900@gmail.com' },
    ];

    return (
        <div id='contact' className='sm:min-h-160'>
            <div className='flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-[Dancing_Script] tracking-wide font-bold gap-4 p-4 sm:p-10 m-4 sm:m-10'>
                <h1>Connect With Me</h1>
                <IoMdGitNetwork className='animate-pulse' />
            </div>

            <div className='flex flex-col-reverse sm:flex-row items-center justify-center w-full'>
                {/* Left Column */}
                <div ref={ref} className={`w-full sm:w-1/2 flex justify-center m-4 min-w-1/2 min-h-1/2 items-center  ${inView ? 'animate-[slide_1.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <div className="flex items-center justify-center flex-col p-4">
                        <p className='font-bold text-xl sm:text-4xl text-cyan-400 font-serif'>Socials</p>
                        <ul className="flex flex-wrap items-center justify-center m-10 gap-6">
                            {skills.map(({ Icon, label, url }, index) => (
                                <SkillIcon key={index} Icon={Icon} label={label} url={url} />
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column */}
                <div className={`w-full sm:w-1/2 m-4 flex items-center justify-center ${inView ? 'animate-[slide-right_1.8s_ease-out_forwards]' : 'opacity-0'}`}>
                    <img className='h-46 sm:h-80' src="/images/pngwing.com.png" alt="Social Banner" />
                </div>
            </div>
        </div>
    )
}

export default Socials
