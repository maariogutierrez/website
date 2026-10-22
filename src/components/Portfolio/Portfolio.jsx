import './Portfolio.css'
import Project from './Project'
import { useEffect, useState } from 'react'

function parseCsv(csvText) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  const normalizedText = csvText.replace(/^\uFEFF/, '');

  for (let index = 0; index < normalizedText.length; index += 1) {
    const char = normalizedText[index];
    const nextChar = normalizedText[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        index += 1;
      }

      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
      continue;
    }

    currentField += char;
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  if (rows.length === 0) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim());

  return rows
    .slice(1)
    .filter((row) => row.some((field) => field && field.trim().length > 0))
    .map((row) => {
      const record = {};

      headers.forEach((header, headerIndex) => {
        record[header] = (row[headerIndex] ?? '').trim();
      });

      return record;
    });
}

function splitCsvList(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSlashDate(dateString) {
  const [month, day, year] = dateString.split('/').map((piece) => Number(piece));

  if (!month || !day || !year) {
    return null;
  }

  const parsed = new Date(year, month - 1, day);

  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

const OWNER = 'Mario Gutiérrez';
const PAGE_SIZE = 6;

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');
  const [selectedField, setSelectedField] = useState(null);
  const [visibleResults, setVisibleResults] = useState(PAGE_SIZE);

  useEffect(() => {
    let isCancelled = false;

    async function loadProjects() {
      try {
        const csvFile = '/Mario Gutierrez - Complete Portfolio Index - Sheet1.csv';
        const response = await fetch(encodeURI(csvFile));

        if (!response.ok) {
          throw new Error(`Could not load projects CSV (status ${response.status})`);
        }

        const csvText = await response.text();
        const records = parseCsv(csvText);

        const parsedProjects = records
          .map((record) => {
            const tags = splitCsvList(record.Tags);
            const fields = tags.filter((tag) => !tag.includes(':'));
            const date = parseSlashDate(record.Date);

            return {
              title: record.Title,
              coauthors: splitCsvList(record.Authors).filter((author) => author !== OWNER),
              description: record.Description,
              url: record.url,
              fields,
              fieldNotes: fields.map((field) => {
                const topics = tags
                  .filter((tag) => tag.startsWith(`${field}:`))
                  .map((tag) => tag.slice(field.length + 1).trim());
                return topics.length > 0 ? `${field}: ${topics.join(', ')}` : field;
              }),
              context: splitCsvList(record.Category).filter((category) => category !== 'Software'),
              date,
              dateLabel: date ? formatDate(date) : record.Date
            };
          })
          .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

        if (!isCancelled) {
          setProjects(parsedProjects);
          setStatus('ready');
        }
      } catch (error) {
        if (!isCancelled) {
          setStatus('error');
          console.error('Failed to load portfolio projects from CSV:', error);
        }
      }
    }

    loadProjects();

    return () => {
      isCancelled = true;
    };
  }, []);

  const fields = Array.from(new Set(projects.flatMap((project) => project.fields))).sort((a, b) =>
    a.localeCompare(b)
  );

  const filteredProjects = selectedField
    ? projects.filter((project) => project.fields.includes(selectedField))
    : projects;

  const displayedProjects = filteredProjects.slice(0, visibleResults);
  const hasMoreResults = filteredProjects.length > visibleResults;

  const handleSelectField = (field) => {
    setSelectedField(field);
    setVisibleResults(PAGE_SIZE);
  };

  return (
    <section className='section' aria-labelledby='portfolioTitle'>
      <h2 id='portfolioTitle' className='section__title'>Projects</h2>
      <div id='portfolio' className='section__body'>
        {status === 'loading' && <p className='portfolio-status'>Loading projects…</p>}

        {status === 'error' && (
          <p className='portfolio-status'>Projects couldn't be loaded. Refresh the page to try again.</p>
        )}

        {status === 'ready' && (
          <>
            <div className='portfolio-filters' role='group' aria-label='Filter projects by field'>
              {[null, ...fields].map((field) => (
                <button
                  key={field ?? 'all'}
                  type='button'
                  className='portfolio-filter'
                  aria-pressed={selectedField === field}
                  onClick={() => handleSelectField(field)}
                >
                  {field ?? 'All'}
                </button>
              ))}
            </div>

            <div className='project-columns' aria-hidden='true'>
              <span className='project-columns__project'>Project</span>
              <span className='project-columns__description'>Description</span>
              <span className='project-columns__date'>Date</span>
            </div>

            <ul className='projects'>
              {displayedProjects.map((project) => (
                <Project key={`${project.title}-${project.url}`} {...project} />
              ))}
            </ul>

            {hasMoreResults && (
              <button
                type='button'
                className='portfolio-more'
                onClick={() => setVisibleResults((previous) => previous + PAGE_SIZE)}
              >
                Show more projects
              </button>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio
