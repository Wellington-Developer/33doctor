import * as React from 'react';

// Material Icons
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Styles
import './styles.css'

// Assets
import logo from '../../assets/logo.png';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header-container" data-aos="fade-down">
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
              <Button
                id="fade-button"
                className="button-header"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <p>Exames</p>
                { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Laboratorial</MenuItem>
                <MenuItem onClick={handleClose}>Imagem</MenuItem>
                <MenuItem onClick={handleClose}>Cardiológico</MenuItem>
                <MenuItem onClick={handleClose}>Oftalmológico</MenuItem>
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}