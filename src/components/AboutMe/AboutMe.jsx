import './AboutMe.css'
import { useLanguage } from '../../context/LanguageContext';

function AboutMe () {
    const { language, changeLanguage } = useLanguage();

    return (
        <div>
            {language === 'en' ? (
                <>
                    <h2>About me</h2>
                    <div id='aboutMe'>
                        <span>
                            Hello! I am Mario Gutiérrez, a <span className="highlight">data engineer</span> from Universidad Politécnica de Madrid. 
                            I am passionate about the importance of data in today's world and how it can be used 
                            to <span className="highlight">solve problems</span> and make everyone's life easier. I am particularly interested in 
                            <span className="highlight"> artificial intelligence</span> and <span className="highlight">machine learning</span>. 
                            Personally, I consider myself a <span className="highlight">curious</span> person, who enjoys 
                            <span className="highlight"> learning</span> and <span className="highlight">creating</span> new things. Furthermore, 
                            I have a particular interest in <span className="highlight">entrepeneurship</span> and the business world, which I 
                            believe is essential to understand how to apply technology in a practical way.
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <h2>Sobre mí</h2>
                    <div id='aboutMe'>
                        <span>
                            Hola! Soy Mario Gutiérrez, un <span className="highlight">ingeniero de datos</span> de la Universidad Politécnica de Madrid. 
                            Me apasiona la importancia de los datos en el mundo actual y cómo se pueden utilizar 
                            para <span className="highlight">resolver problemas</span> y facilitar la vida de todos. Estoy particularmente interesado en la 
                            <span className="highlight"> inteligencia artificial</span> y el <span className="highlight">aprendizaje automático</span>. 
                            Personalmente, me considero una persona <span className="highlight">curiosa</span>, que disfruta 
                            <span className="highlight"> aprendiendo</span> y <span className="highlight">creando</span> cosas nuevas. Además, 
                            tengo un interés particular en el <span className="highlight">emprendimiento</span> y el mundo empresarial, lo cual 
                            creo que es esencial para entender cómo aplicar la tecnología de manera práctica.
                        </span>
                    </div>
                </>
            )}
        </div>
    )
}

export default AboutMe