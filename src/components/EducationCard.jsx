import React from 'react'
import { useInView } from 'react-intersection-observer'

const EducationCard = ({ image, school, degree, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  })

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center flex-col p-2 m-4 text-center will-change-transform transition-all duration-1000 ease-out 
      ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} hover:shadow-xl/30`}
    >
      <div>
        <img className='max-w-62 max-h-43' src={image} alt="school" />
      </div>
      <div className='font-bold text-3xl p-4'>
        <h2>{school}</h2>
      </div>
      <div className='text-xl p-2'>
        <h4>{degree}</h4>
      </div>
      <div>
        <p>{duration}</p>
      </div>
    </div>
  )
}

export default EducationCard
