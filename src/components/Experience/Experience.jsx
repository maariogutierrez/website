import { useState } from 'react'
import './Experience.css'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const JOBS = [
    {
        title: 'Research Intern in Universidad Politécnica de Madrid',
        duration: 'Nov 2024 - Aug 2026',
        description: (
            <>
                <span className='highlight'>Collaborated on the architectural design</span> and development of a risk assessment framework for the <span className='highlight'>Future Combat Air System (FCAS)</span> defense project.<br></br>
                <span className='highlight'>Developed a cyberthreat dashboard</span> to deliver data-driven risk metrics for strategic decision-making.<br></br>
                <span className='highlight'>Designed a dynamic risk assessment framework</span> using ontology-based modeling; engineered logic to automatically propagate and measure risk across interconnected asset networks.
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
            <h2 id='experienceTitle'>Experience</h2>
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
                                    <div className='job-title-and-duration'>
                                        <div className='job-title'>{job.title}</div>
                                        <div className='job-duration'>{job.duration}</div>
                                    </div>
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