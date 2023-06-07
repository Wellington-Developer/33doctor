import './styles.css'

// Assets
import logoImg from '../../assets/logo-white.png';

// Link
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="bottom-side">
        <div className="logo">
          <img src={logoImg} alt="logo" />

          <h1>Rua 9-A, 228, St. Aeroporto, Goiânia/GO, CEP: 74075-250</h1>
          <h1 id="tel"><span>Tel Fixo:</span> (62) 3933-8700</h1>
          <h1><span>Whatsapp:</span> (62) 3933-8700</h1>

          <p>© Todos os direitos reservados 33Doctor | 2023</p>
        </div>

        <div className="exames-buscados">
          <ul>
            <h1>Exames mais buscados</h1>
            <li>
              <Link to="pages/laboratorial">Laboratoriais</Link>
            </li>
            <li>
              <Link to="pages/imagem">Imagem</Link>
            </li>
            <li>
              <Link to="pages/cardiologico">Cardiológico</Link>
            </li>
            <li>
              <Link to="pages/oftalmologico">Oftalmológico</Link>
            </li>
            <h3>
              <Link to="pages/exame">Ver todos</Link>
            </h3>
          </ul>
        </div>

        <div className="consultas-buscadas">
          <ul>
            <h1>Consultas mais buscadas</h1>
            <li>
              <Link to="pages/consulta" key="1">
                Cardiológico  
              </Link>
            </li>
            <li>
              <Link to="pages/consulta" key="2">
                Oftalmológico  
              </Link>
            </li>
            <h3>
              <Link to="pages/consulta" key="3">
                Ver todos
              </Link>
            </h3>
          </ul>
        </div>

        <div className="saiba-mais">
          <ul>
            <h1>Saiba mais</h1>
            <li>
              <a href="https://franquias33doctor.com.br">
                Seja um franqueado
              </a>
            </li>
            <li>
              <a href="/#home">Inicio</a>
            </li>
            <li>
              <a href="/#about">Como funciona</a>
            </li>
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