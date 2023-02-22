import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJava, faPython, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      }, [])

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>Hi, I'm David, and I'm an ambitious and hardworking individual with a passion for programming. My expertise lies in programming languages like Java, Python, C, React, and HTML5. I also have experience with Unity and Swift, and I'm constantly expanding my skillset to take on new challenges.</p>
                    <p>My love for programming began when I was in school, and since then, I've been honing my skills to become a proficient programmer. My dedication and hard work have allowed me to master multiple programming languages, and I enjoy solving complex programming problems that challenge me to push my limits. I thrive on the satisfaction that comes from overcoming these challenges and seeing my ideas come to life through programming.</p>
                    <p>Apart from programming, I'm always looking for new opportunities to learn and grow, whether it's through attending coding workshops or working on side projects. I believe that my proficiency in programming and my hunger for knowledge make me a valuable asset to any team. I'm excited about the possibilities that programming can offer, and I'm always eager to take on new projects that challenge me and help me grow as a programmer.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#4682B4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faC} color="#4682B4" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faUnity} color="#808080" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About