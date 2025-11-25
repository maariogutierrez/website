import './Portfolio.css'
import Project from './Project'
import { GithubIcon } from '@mantinex/dev-icons'
import { Button } from '@mantine/core'
import { GitHubCalendar } from 'react-github-calendar'
import { useLanguage } from '../../context/LanguageContext';

function Portfolio() {
  const { language, changeLanguage } = useLanguage();

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

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="heatmap">
        <GitHubCalendar username="maariogutierrez" tooltips={calendarTooltips} labels={labels} />
      </div>
      <div id='portfolio'>
        <Project link='https://github.com/maariogutierrez/GreenChoiceAI' image='/media/projects/GreenChoiceAI.png' tag={language === 'en' ? 'ii edicion indesiahack winner' : 'ganador ii edición indesiahack'} title='GreenChoice AI' date='Nov 22th'></Project>
        <Project link='https://github.com/maariogutierrez/data-orchestrator' image='/media/projects/DataOrchestrator.png' tag={language === 'en' ? 'university project' : 'proyecto universitario'} title='Data Orchestrator' date='Oct 9th'></Project>
      </div>
      { (language === 'en') ?
      <Button leftSection={<GithubIcon size={16} />} className='button portfolio' component="a" href="https://github.com/maariogutierrez?tab=repositories" target="_blank" rel="noopener noreferrer">And more...</Button>
      :
      <Button leftSection={<GithubIcon size={16} />} className='button portfolio' component="a" href="https://github.com/maariogutierrez?tab=repositories" target="_blank" rel="noopener noreferrer">Y más...</Button>
      }
    </div>
  )
}

export default Portfolio
