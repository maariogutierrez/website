import './Project.css';

function Project({ title, url, context, description, coauthors, fieldNotes, dateLabel }) {
  return (
        <li className='project'>
            <div className='project__name'>
                <h3 className='project__title'>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h3>
                {context.length > 0 && <p className='project__note'>{context.join(', ')}</p>}
            </div>

            <div className='project__description'>
                <p>{description}</p>
                {coauthors.length > 0 && <p className='project__note'>With {coauthors.join(', ')}</p>}
                {fieldNotes.map((note) => (
                    <p key={note} className='project__note'>{note}</p>
                ))}
            </div>

            <p className='project__date'>{dateLabel}</p>
        </li>
  )
}

export default Project
