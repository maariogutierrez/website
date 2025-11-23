import './Portfolio.css'
import Project from './Project'
import { GithubIcon } from '@mantinex/dev-icons'
import { Button } from '@mantine/core'
import { GitHubCalendar } from 'react-github-calendar'

function Portfolio() {
  const calendarTooltips = {
    activity: {
      text: (activity) => {
        const contributionLabel = activity.count === 1 ? 'contribution' : 'contributions'
        const formattedDate = new Date(activity.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })
        return `${activity.count} ${contributionLabel} on ${formattedDate}`
      },
      withArrow: true
    }
  }

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="heatmap">
        <GitHubCalendar username="maariogutierrez" tooltips={calendarTooltips} />
      </div>
      <div id='portfolio'>
        <Project link='https://github.com/maariogutierrez/GreenChoiceAI' image='/media/projects/GreenChoiceAI.png' tag='ii edicion indesiahack winner' title='GreenChoice AI' date='Nov 22th'></Project>
        <Project link='https://github.com/maariogutierrez/data-orchestrator' image='/media/projects/DataOrchestrator.png' tag='university project' title='Data Orchestrator' date='Oct 9th'></Project>
      </div>
      
      <Button leftSection={<GithubIcon size={16} />} className='button portfolio' component="a" href="https://github.com/maariogutierrez?tab=repositories" target="_blank" rel="noopener noreferrer">And more...</Button>
    </div>
  )
}

export default Portfolio
