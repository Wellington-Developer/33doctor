import { Button } from '../Utils/Button'
import './styles.css'

// Assets
import logoImg from '../../assets/logo-white.png';
import googlePlayImg from '../../assets/google-play.png';
import appleStoreImg from '../../assets/apple-store.png';

// Link
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="top-side">
        <h1>Você já cuidou da <span>saúde</span> sua familia hoje?</h1>
        <Button />
      </div>
      <div className="bottom-side">
        <div className="logo">
          <img src={logoImg} alt="logo" />
          <div className="social-media">
            <div className="images-link">
              <Link to="https://play.google.com/store/search?q=33doctor&c=apps&hl=pt_PT&pli=1">
                <img src={googlePlayImg} alt="google play"/>
              </Link>
              <Link to="https://play.google.com/store/search?q=33doctor&c=apps&hl=pt_PT&pli=1">
                <img src={appleStoreImg} alt="apple store"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="atendimento">
          <ul>
            <h1>Atendimento</h1>
            <li>Segunda-feira das 07h00 às 17h00</li>
            <li>Terça-feira das 07h00 às 17h00</li>
            <li>Quarta-feira das 07h00 às 17h00</li>
            <li>Quinta-feira das 07h00 às 17h00</li>
            <li>Sexta-feira das 07h00 às 16h00</li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <h1>Menu</h1>
            <li>Seja um franqueado</li>
            <li>Inicio</li>
            <li>Serviço</li>
            <li>Sobre Nós</li>
          </ul>
        </div>
      </div>

      <div className="info">
        <p>
          A 33doctor não é um plano de saúde, em nenhuma forma de interpretação, não garante e não se responsabiliza pelos serviços oferecidos pelos diversos parceiros, nem pelo pagamento das despesas, nem assegura desconto em todos os serviços garantidos por planos ou seguros de saúde. Não possui mensalidades ou anuidades.
        </p>
      </div>
    </footer>
  )
}