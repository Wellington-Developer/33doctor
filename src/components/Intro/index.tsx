import { Button } from "../Utils/Button";
import heroImg from "../../assets/hero.png";
import "./styles.css";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="left-side">
        <h1>Agendar seus <span>exames ou consultas</span> em Campinas é simples!</h1>
        <p>Obtenha os cuidados de saúde que você precisa com valores mais acessíveis na rede particular em Goiânia mais próxima a você.</p>
        <Button />
      </div>

      <div className="right-side">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  )
}