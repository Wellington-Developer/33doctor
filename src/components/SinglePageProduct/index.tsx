import { Button } from "../Utils/Button";
import { Link, useParams } from 'react-router-dom';

// Assets
import tacImg from '../../assets/icons/tac.svg';
import bannerImg from '../../assets/singleproduct.jpeg';

// Styles
import './styles.css';

// Hooks
import {useState} from 'react';

// MUI Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const SinglePageProduct = () => {
  const { id } = useParams()

  const [active, setActive] = useState(false);
  console.log(active)

  return (
    <div className="container-page--product">
      <div className="left-side">
        <div className="info-product">
          <h1>Agendar <span>{id}</span> em Goiânia</h1>
          <div className="bradcumb">
            <Link to="/">Ínicio</Link>
            <ChevronRightIcon />
            <Link to={'/pages/'+id}>Páginas</Link>
            <ChevronRightIcon />
            <Link to={'/singlepage/'+id} id="link">{id}</Link>
          </div>
        </div>

        <div className="cta-info">
          <div className="img-cta">
            <img src={tacImg} alt="tac" />
          </div>

          <p>
            Agendar um exame de ressonância magnética pode ser uma tarefa quando você está preocupado com os custos envolvidos.
          </p>

          <Button internalLink="#agendar" />

        </div>

        <div className="box-container--cta">
          <div className="box-cta">
            <img src={tacImg} alt="tac" />
            <div className="info-box">
              <h1>Valores acessíveis</h1>
              <p>Consultas e exames com 80% de desconto</p>
            </div>
          </div>

          <div className="box-cta">
            <img src={tacImg} alt="tac" />
            <div className="info-box">
              <h1>Valores acessíveis</h1>
              <p>Consultas e exames com 80% de desconto</p>
            </div>
          </div>

          <div className="box-cta">
            <img src={tacImg} alt="tac" />
            <div className="info-box">
              <h1>Valores acessíveis</h1>
              <p>Consultas e exames com 80% de desconto</p>
            </div>
          </div>
        </div>
        
        <p className={active ? "text active" : "text"}>
          Procurar os melhores profissionais de saúde é uma tarefa 
          complicada e demorada.<br/><br/>
          E mesmo quando encontramos, os custos podem ser altos.<br/><br/>
          A <span>33doctor facilita a busca pelo médico, clínica ou laboratório</span> 
          perfeito para os cuidados com a sua saúde com 
          <span> valores mais acessíveis.</span>
        </p>
        {
          active ? (
            <h3 onClick={() => setActive(!active)}>Ler menos</h3>
          ) : (
            <h3 onClick={() => setActive(!active)}>Continuar lendo</h3>
          )
        }
        <div className="container-img">
          <img src={bannerImg} alt="persons" />
        </div>

      </div>

      <div className="right-side" id="agendar">
        <div className="box">
          <div className="particular-info">
            <h1>Rede particular</h1>
            <h3>Agende agora com até 60% de desconto</h3>
            <form action="">
              <input type="text" placeholder="Seu nome"/>
              <input type="date"/>
              <Button />
            </form>
          </div>
        </div>
      </div>
    </div>
  ) 
  
}