// Components
import { Button } from "../Utils/Button"

// Assets
import shapeImg from '../../assets/shape.png';

// Styles
import './styles.css'

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="shape-container">
        <div className="info">
          <h1>❤️Saúde mais acessível para todos</h1>
          <p>Agende seu exame ou consulta na rede particular com até 60% de desconto!</p>
          <Button />
        </div>

        <div className="shape">
          <img src={shapeImg} alt="shape"/>
        </div>
      </div>
    </div>
  )
}