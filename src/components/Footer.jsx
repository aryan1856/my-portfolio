import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-10 px-6'>
            <footer className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 border-t border-gray-700 pt-6">
                    
                    {/* Left: Navigation Links */}
                    <div className="flex flex-col items-center sm:items-start gap-2 text-sm font-light">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>

                    {/* Vertical Divider for larger screens */}
                    <div className="hidden sm:block h-16 w-px bg-gray-600" />

                    {/* Right: Copyright */}
                    <div className="text-center sm:text-left text-sm font-extralight text-gray-400">
                        <p>&copy; {new Date().getFullYear()} <span className="text-white">Aryan Diwakar</span>. Made with <span className="text-red-400">❤️</span> using <span className="text-blue-400">React</span>.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
