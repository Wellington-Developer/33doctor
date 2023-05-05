// Material Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Styles
import './styles.css'

// Assets
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="right-side">
        <nav>
          <ul>
            <li>
              <a href="teste">Consultas</a>
            </li>
            <li>
              <a href="teste">
                Exames
                <KeyboardArrowDownIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}