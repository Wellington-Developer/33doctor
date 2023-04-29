import './styles.css'
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
            <li><a href="#consultas">Consultas</a></li>
            <li><a href="#exames">Exames</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}