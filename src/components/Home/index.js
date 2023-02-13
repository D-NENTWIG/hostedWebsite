import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/NENTWIG.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D','a','v','i','d']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r',]

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
    }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">

                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                        
                    <br /> 

                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={16} />

                    <img src={LogoTitle} alt="developer" />
                    <br/>

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={21} />

                    </h1>
                    <h2>Student at UCL | Computer Science</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home