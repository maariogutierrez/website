import './Technologies.css'
import TechnologiesMarquee from './TechnologiesMarquee'
import { useLanguage } from '../../context/LanguageContext';

function Technologies () {
    const { language, changeLanguage } = useLanguage();
    return (
        <div>
            { (language==='en') ? <h2>What I work with</h2> : <h2>Con qué trabajo</h2> }
            <div id='technologies'>
                <TechnologiesMarquee duration={40}></TechnologiesMarquee>
            </div>
        </div>
    )
}

export default Technologies