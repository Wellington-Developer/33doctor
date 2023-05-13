// Material Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import './styles.css'

// Assets
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [modalActive, setModalActive] = useState(true);

  const handleActiveModal = () => {
    setModalActive(!modalActive)
    console.log(modalActive)
  }

  return (
    <header className="header-container">
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="right-side">
        <nav>
          <ul id="menu-icon">
            <MenuIcon onClick={ handleActiveModal } className={modalActive ? '' : 'hidden'}/>
          </ul>

          <ul className={modalActive ? '' : 'active'}>
            <CloseIcon onClick={ handleActiveModal } className={modalActive ? 'hidden' : 'showed'}/>
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