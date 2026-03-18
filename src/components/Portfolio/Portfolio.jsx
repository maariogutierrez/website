import './Portfolio.css'
import Project from './Project'
import { GithubIcon } from '@mantinex/dev-icons'
import { Button, MultiSelect, Text } from '@mantine/core'
import { GitHubCalendar } from 'react-github-calendar'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext';

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

function formatDate(dateString, language) {
  const parsedDate = parseSlashDate(dateString);

  if (!parsedDate) {
    return dateString;
  }

  return parsedDate.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function Portfolio() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleResults, setVisibleResults] = useState(3);

  useEffect(() => {
    let isCancelled = false;

    async function loadProjects() {
      try {
        setIsLoadingProjects(true);

        const csvFile = '/Mario Gutierrez - Complete Portfolio Index - Sheet1.csv';
        const response = await fetch(encodeURI(csvFile));

        if (!response.ok) {
          throw new Error(`Could not load projects CSV (status ${response.status})`);
        }

        const csvText = await response.text();
        const records = parseCsv(csvText);

        const parsedProjects = records.map((record) => ({
          title: record.Title,
          authors: splitCsvList(record.Authors),
          description: record.Description,
          url: record.url,
          tags: splitCsvList(record.Tags),
          categories: splitCsvList(record.Category),
          date: formatDate(record.Date, language)
        }));

        if (!isCancelled) {
          setProjects(parsedProjects);
        }
      } catch (error) {
        if (!isCancelled) {
          setProjects([]);
          console.error('Failed to load portfolio projects from CSV:', error);
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingProjects(false);
        }
      }
    }

    loadProjects();

    return () => {
      isCancelled = true;
    };
  }, [language]);

  const calendarTooltips = {
    activity: {
      text: (activity) => {
        const isEn = language === 'en';
        const contributionLabel = activity.count === 1 
          ? (isEn ? 'contribution' : 'contribución') 
          : (isEn ? 'contributions' : 'contribuciones');
        const formattedDate = new Date(activity.date).toLocaleDateString(isEn ? 'en-US' : 'es-ES', {
          month: 'short',
          day: 'numeric'
        });
        return isEn 
          ? `${activity.count} ${contributionLabel} on ${formattedDate}`
          : `${activity.count} ${contributionLabel} el ${formattedDate}`;
      },
      withArrow: true
    }
  }

  const labels = {
    totalCount: language === 'en' 
      ? '{{count}} contributions in the last year' 
      : '{{count}} contribuciones en los últimos 365 días'
  }

  const projectLabels = language === 'en'
    ? { categories: 'Categories', tags: 'Tags', authors: 'Authors' }
    : { categories: 'Categorías', tags: 'Etiquetas', authors: 'Autores' };

  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort((a, b) =>
    a.localeCompare(b)
  );
  const uniqueCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort((a, b) =>
    a.localeCompare(b)
  );

  const tagsPlaceholder = language === 'en' ? 'Filter tags' : 'Filtrar etiquetas';
  const categoriesPlaceholder = language === 'en' ? 'Filter categories' : 'Filtrar categorías';

  const filteredProjects = projects.filter((project) => {
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => project.categories.includes(category));

    return matchesTags && matchesCategories;
  });

  useEffect(() => {
    setVisibleResults(3);
  }, [selectedTags, selectedCategories]);

  const displayedProjects = filteredProjects.slice(0, visibleResults);
  const hasMoreResults = filteredProjects.length > visibleResults;

  return (
    <div>
      <h2 id='portfolioTitle'>Portfolio</h2>
      <div className="heatmap">
        <GitHubCalendar username="maariogutierrez" tooltips={calendarTooltips} labels={labels} />
      </div>
      <div id='portfolio'>
        <div className='portfolio-search'>
          <MultiSelect
            className='portfolio-search-input'
            value={selectedCategories}
            onChange={setSelectedCategories}
            data={uniqueCategories}
            placeholder={categoriesPlaceholder}
            clearable
            searchable
            nothingFoundMessage={language === 'en' ? 'No categories found' : 'No se encontraron categorías'}
          />
          <MultiSelect
            className='portfolio-search-input'
            value={selectedTags}
            onChange={setSelectedTags}
            data={uniqueTags}
            placeholder={tagsPlaceholder}
            clearable
            searchable
            nothingFoundMessage={language === 'en' ? 'No tags found' : 'No se encontraron etiquetas'}
          />
        </div>

        {isLoadingProjects && (
          <Text c="dimmed">{language === 'en' ? 'Loading projects...' : 'Cargando proyectos...'}</Text>
        )}

        {!isLoadingProjects && displayedProjects.map((project) => (
          <Project
            key={`${project.title}-${project.url}`}
            title={project.title}
            categories={project.categories}
            tags={project.tags}
            description={project.description}
            authors={project.authors}
            date={project.date}
            url={project.url}
            labels={projectLabels}
          />
        ))}

        {!isLoadingProjects && filteredProjects.length === 0 && (
          <Text c="dimmed">
            {language === 'en' ? 'No projects match your search.' : 'Ningún proyecto coincide con tu búsqueda.'}
          </Text>
        )}

        {!isLoadingProjects && hasMoreResults && (
          <Button
            variant="dark"
            onClick={() => setVisibleResults((previous) => previous + 3)}
          >
            {language === 'en' ? 'Show more results' : 'Mostrar más resultados'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Portfolio
