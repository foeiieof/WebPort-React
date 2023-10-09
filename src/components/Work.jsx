import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Contact Creator',
        duration: '3 Years',
        detail: 'Loren ipsum, dolar sit....'
    },
    {
        year: 2020,
        title: 'Contact Creator',
        duration: '4 Years',
        detail: 'Loren ipsum, dolar sit....'
    },
    {
        year: 2021,
        title: 'Contact Creator',
        duration: '1 Years',
        detail: 'Loren ipsum, dolar sit....'
    },
    {
        year: 2022,
        title: 'Contact Creator',
        duration: '0.9 Years',
        detail: 'Loren ipsum, dolar sit....'
    },

]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {
                data.map((item, idx) => (
                    <WorkItem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    detail={item.detail} 
                    />
                ))
            }
        </div>
    )
}

export default Work