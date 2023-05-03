// Components
import { Button } from "../Utils/Button"

// Assets
import shapeImg from '../../assets/shape.svg';

// Styles
import './styles.css'

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="shape-container">
        <div className="info">
          <h1>Qual <span>exame ou consulta</span> você quer agendar?</h1>
          <Button />
        </div>

        <div className="shape">
          <img src={shapeImg} alt="shape"/>
        </div>
      </div>
    </div>
  )
}