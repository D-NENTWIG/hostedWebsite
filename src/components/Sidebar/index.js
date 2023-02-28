import './index.scss'
import LogoS from '../../assets/images/LOGO.png'
import LogoSubtitle from '../../assets/images/NENTWIG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="sub-logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'about-link'}
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'contact-link'}
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'cv-link'}
        to="/cv"
      >
        <FontAwesomeIcon icon={faFileContract} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.linkedin.com/in/david-nentwig/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      
      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://github.com/D-NENTWIG"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=1l8DVDo84CM"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://discordapp.com/users/219046654748131328"
        >
          <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
