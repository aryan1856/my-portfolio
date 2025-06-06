import React from 'react'
import EducationCard from './EducationCard'
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
    const undergrad_image = "/images/Dbgi_logo.png";
    const postgrad_image = "/images/mnnit.png";
    const school_ugrad = "Dev Bhoomi Group of Institutions, Dehradun";
    const school_pgrad = "Motilal Nehru National Institute of Technology Allahabad, Prayagraj";
    const degree_ugrad = "Bachelors in Computer Applications";
    const degree_pgrad = "Masters in Computer Applications";
    const duration_ugrad = "Sep 2020 - Aug 2023";
    const duration_pgrad = "Aug 2023 - present";
  return (
    <div className="flex justify-center items-center flex-col p-4 w-full sm:min-h-190">

    <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-[Dancing_Script] tracking-wide font-bold gap-4 p-4">
        <h1>Education</h1>
        <FaUserGraduate className='animate-pulse'/>
    </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mt-8">
        <EducationCard image={undergrad_image} school={school_ugrad} degree={degree_ugrad} duration={duration_ugrad}/>
        <EducationCard image={postgrad_image} school={school_pgrad} degree={degree_pgrad} duration={duration_pgrad}/>
      </div>
    </div>
  )
}

export default Education