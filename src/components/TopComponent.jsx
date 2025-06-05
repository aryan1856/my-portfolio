import React from 'react';

const TopComponent = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 p-4">
        <img className="sm:h-143 rounded-lg object-cover opacity-0 animate-[slide_1.8s_ease-out_forwards]" src="/images/my.jpg" alt="Aryan" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 p-4 opacity-0 animate-[slide-right_1.5s_ease-out_forwards]">
        <div className='pb-8'>
            <h2 className="text-white md:text-6xl font-bold text-center text-xl">
                Hi! I'm <br /><span className='text-cyan-400 font-[Dancing_Script] tracking-wide'>Aryan Diwakar</span>
            </h2>
        </div>
        <div className='text-white sm:text-2xl font-serif text-justify p-4'>
            <p>
                 I am an adventurous individual with a creative inclination. Possessing a passion for technology, I revel in tackling real-life challenges and consistently strive for improvement. Presently, I am engaged in pursuing my Post-Graduation degree from <abbr title="Motilal Nehru National Institute of Technology, Allahabad, Prayagraj" className='abbr'>NIT Allahabad</abbr>, where my profound interest lies in problem-solving and web development endeavors.
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 p-4">
          <button className="relative overflow-hidden bg-cyan-400 rounded-2xl min-w-[200px] min-h-12 px-6 py-3 font-semibold 
                            transform transition-transform duration-500 hover:scale-110 hover:cursor-pointer hover:text-white
                            hover:bg-cyan-500">
            Contact Me
          </button>

          <button className="relative overflow-hidden bg-cyan-400 rounded-2xl min-w-[200px] min-h-12 px-6 py-3 font-semibold 
                            transform transition-transform duration-500 hover:scale-110 hover:cursor-pointer hover:text-white
                            hover:bg-cyan-500">
            Resume (Open to work)
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
