import './Technologies.css'
import TechnologiesMarquee from './TechnologiesMarquee'

function Technologies () {
    return (
        <div>
            <h2>What I work with</h2>
            <div id='technologies'>
                <TechnologiesMarquee duration={40}></TechnologiesMarquee>
            </div>
        </div>
    )
}

export default Technologies