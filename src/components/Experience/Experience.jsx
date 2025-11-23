import { useState } from 'react'
import './Experience.css'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const JOBS = [
    {
        title: 'Research Intern in Universidad Politécnica de Madrid',
        duration: 'Nov 2024 - Present',
        description: (
            <>
                Developing a <span className='highlight'>dashboard</span> to visualize <span className='highlight'>cyberthreats</span> for the <span className='highlight'>FCAS - Risk Assessment Framework Development</span> project, using <span className='highlight'>Flask</span> to build a web application that integrates with both <span className='highlight'>MongoDB</span> and <span className='highlight'>Elasticsearch</span> databases.
            </>
        )
    }
]

function Experience() {
    const [openJobIndex, setOpenJobIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenJobIndex((prev) => (prev === index ? null : index))
    }

    return (
        <div>
            <h2>Experience</h2>
            <div id='experience'>
                <div className='jobs'>
                    {JOBS.map((job, index) => {
                        const isOpen = openJobIndex === index
                        const descriptionId = `job-description-${index}`
                        return (
                            <div className='job' key={job.title}>
                                <button
                                    type='button'
                                    className='job-details'
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={descriptionId}
                                >
                                    {isOpen ? <IconChevronUp size={14} stroke={1.5} className='icon' /> : <IconChevronDown size={14} stroke={1.5} className='icon' />}
                                    
                                    <div className='job-title'>{job.title}</div>
                                    <div className='job-duration'>{job.duration}</div>
                                </button>
                                <div
                                    id={descriptionId}
                                    className={`job-description ${isOpen ? 'job-description--open' : ''}`}
                                    role='region'
                                    aria-hidden={!isOpen}
                                >
                                    {job.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience