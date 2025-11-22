import './Experience.css'

function Experience() {
    return (
        <div>
            <h2>Experience</h2>
            <div id='experience'>
                <div className='jobs'>
                    <div className='job'>
                        <div className='job-details'>
                            <div className='job-title'>- Research Intern in Universidad Politécnica de Madrid</div>
                            <div className='job-duration'>Nov 2024 - Present</div>
                        </div>
                        <div className='job-description'>
                            Developing a <span className='highlight'>dashboard</span> to visualize <span className='highlight'>cyberthreats</span> for the <span className='highlight'>FCAS - Risk Assessment Framework Development</span> project, using <span className='highlight'>Flask</span> to build a web application that integrates with both <span className='highlight'>MongoDB</span> and <span className='highlight'>Elasticsearch</span> databases.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience