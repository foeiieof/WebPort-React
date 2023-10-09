import React from 'react'
import ProjectItem from './ProjectItem'
import cryptoimg from '../assets/cryptoimg.jpeg'
import netflix from '../assets/netflix.jpeg'
import property from '../assets/property.png'
import twitch from '../assets/twitch.png'



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus debitis distinctio fugit unde error adipisci dolorum sed quibusdam vel consequatur, a molestias delectus nesciunt cupiditate! Vitae, quos. Cumque, architecto esse.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={cryptoimg} title='Crypto App' />
            <ProjectItem img={property} title='Property App' />
            <ProjectItem img={netflix} title='Netflix App' />
            <ProjectItem img={twitch} title='Twitch App' />
        </div>
    </div>
  )
}

export default Projects