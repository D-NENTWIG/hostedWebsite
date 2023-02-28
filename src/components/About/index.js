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
                    <p>Hi, I'm David, a passionate and hardworking programmer with expertise in Java, Python, C, CSS, React, HTML5, BASH, ZSH, Git, Unity, and Swift. My love for programming began in school, and since then, I've mastered multiple programming languages and enjoy solving complex problems.</p>
                    <p>I'm dedicated to learning and expanding my skillset through workshops and side projects. I believe that my proficiency in programming and eagerness to learn make me a valuable asset to any team.</p>
                    <p>I'm excited about the possibilities that programming offers and always ready to take on new challenges. I thrive on the satisfaction that comes from seeing my ideas come to life through programming and look forward to taking on projects that push my limits.</p>
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
    );
}

export default About