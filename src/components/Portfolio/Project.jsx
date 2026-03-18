import './Project.css';

function Project(props) {
  return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-link">
            <article className='project-item'>
                <header className='project-header'>
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-date'>{props.date}</p>
                </header>

                <p className='project-description'>{props.description}</p>

                <div className='project-meta'>
                    <div className='project-meta-line'>
                        <span className='project-meta-label'>{props.labels.categories}:</span>
                        <div className='project-chips'>
                            {props.categories.map((category) => (
                                <span key={category} className='project-chip category-chip'>
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='project-meta-line'>
                        <span className='project-meta-label'>{props.labels.tags}:</span>
                        <div className='project-chips'>
                            {props.tags.map((tag) => (
                                <span key={tag} className='project-chip tag-chip'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className='project-meta-line'>
                        <span className='project-meta-label'>{props.labels.authors}:</span>
                        <span>{props.authors.join(', ')}</span>
                    </p>
                </div>
            </article>
        </a>
  )
}

export default Project
