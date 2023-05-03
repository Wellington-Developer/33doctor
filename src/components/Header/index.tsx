// Material Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Styles
import './styles.css'

// Assets
import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="left-side">
        <img src={logo} alt="logo" />
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