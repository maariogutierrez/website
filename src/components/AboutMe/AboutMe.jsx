import './AboutMe.css'

function AboutMe () {
    return (
        <div>
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
        </div>
    )
}

export default AboutMe