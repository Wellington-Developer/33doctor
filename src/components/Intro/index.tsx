import { Button } from "../Utils/Button";
import heroImg from "../../assets/hero.png";
import "./styles.css";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="left-side">
        <h1>Agendar seus exames e consultas é super simples!</h1>
        <p>❤️ Obtenha os cuidados de saúde que você precisa com <span>valores mais acessíveis</span> na <span>rede particular em Goiânia</span> mais próxima a você.</p>
          <Button internalLink="#services"/>
      </div>

      <div className="right-side">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  )
}