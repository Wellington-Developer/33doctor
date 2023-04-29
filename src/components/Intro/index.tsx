import { Button } from "../Utils/Button";
import heroImg from "../../assets/hero.png";
import "./styles.css";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="left-side" data-aos="fade-right">
        <h1>Você já cuidou da <span>saúde</span> da sua familia hoje?</h1>
        <p>Obtenha os cuidados de saúde que você precisa com valores mais acessíveis na rede particular mais próxima a você.</p>
        <Button />
      </div>

      <div className="right-side" data-aos="fade-left">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  )
}