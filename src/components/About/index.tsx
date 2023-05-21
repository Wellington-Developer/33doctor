// Assets
import aboutImg from '../../assets/precisou-consultou.png';

// Styles
import './styles.css';

// MUI Icons
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import WavesIcon from '@mui/icons-material/Waves';

export const About = () => {
  return (
    <div className="bg-container" id="about">
      <div className="about-container">
        <div className="left-side">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="right-side">
          <h1>Tecnologia inovadora para cuidar da sua saúde</h1>
          <p>Procurar os melhores profissionais de saúde é uma tarefa 
            complicada e demorada.</p>
          <p>
            E mesmo quando encontramos, os custos podem ser altos.
          </p>
          
          <p>
            A <span>33doctor facilita a busca pelo médico, clínica ou laboratório</span> 
            perfeito para os cuidados com a sua saúde com 
            <span> valores mais acessíveis.</span>
          </p>

          <div className="info-about--container">
            <div className="box">
              <AdsClickIcon />
              <h1>Valores acessíveis</h1>
              <p>Consultas e exames com até 60% de desconto.</p>
            </div>
            <div className="box">
              <ElectricBoltIcon />
              <h1>Agendamento rápido</h1>
              <p>Agendar é super simples, fácil e rápido.</p>
            </div>
            <div className="box">
              <GpsFixedIcon />
              <h1>Rede particular próxima</h1>
              <p>Agendamento na rede particular mais próxima a você</p>
            </div>
            <div className="box">
              <WavesIcon />
              <h1>Sem mensalidades</h1>
              <p>Sem mensalidades. Pague apenas quando usar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}