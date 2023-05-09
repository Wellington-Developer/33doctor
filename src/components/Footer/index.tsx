import { Button } from '../Utils/Button'
import './styles.css'

// Assets

export const Footer = () => {
  return (
    <footer>
      <div className="top-side">
        <h1>Você já cuidou da <span>saúde</span> sua familia hoje?</h1>
        <Button />
      </div>
      <div className="bottom-side">
        <div className="logo">
          <h1>33doctor</h1>
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
            <li>Inicio</li>
            <li>Serviço</li>
            <li>Sobre Nós</li>
            <li>Seja um franqueado</li>
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