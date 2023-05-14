import { Button } from "../Utils/Button"
import { BoxExam } from "./BoxExam";

// Styles
import './styles.css';

export const SinglePageProduct = () => {
  return (
    <div>
      <div className="container-single--product">
        <div className="left-side">
          <h1>Exame oftalmológico</h1>
          <p>Obtenha os cuidados de saúde que você precisa com valores mais acessíveis na rede particular mais próxima a você.</p>

          <Button />
        </div>
        <div className="right-side">
          <img src="https://images.unsplash.com/photo-1632054890601-224e2e65bebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80" alt="exam" />
          <h1>Exame</h1>
        </div>
      </div>

      <div className="more-products">
        <h1><span>Exames</span> na mesma faixa de preço</h1>
        <div className="exams-box">
          <BoxExam />
          <BoxExam />
          <BoxExam />
          <BoxExam />
        </div>
      </div>
    </div>
  )
}