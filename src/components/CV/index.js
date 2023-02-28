import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import cv from '../../assets/files/CV_David_Nentwig_2023.pdf'



const CV = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      }, [])

      return(
        <>
            <div className='container cv-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','u','r','r','i','c','u','l','u','m',' ','v','i','t','a','e',]}
                            idx={13}
                        />
                    </h1>
                    <p>
                    As a computer science student, I possess a strong foundation in programming languages, data structures, algorithms, and software engineering principles. I have also completed several projects in software development, web development, and system engineering. I am passionate about technology and excited to tackle new challenges in the field.
                    </p>
                </div>
                <div className='pdf-area'>
                    <embed title='My CV' src={cv} width="500px" height="690px" />
                </div>
            </div>
            <Loader type='pacman' />
        </>
      );
}


export default CV