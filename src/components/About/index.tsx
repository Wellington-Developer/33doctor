// Assets
import aboutImg from '../../assets/intro.png';

// Styles
import './styles.css';

// MUI Icons
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import WavesIcon from '@mui/icons-material/Waves';

export const About = () => {
  return (
    <div className="bg-container">
      <div className="about-container" data-aos="fade-up">
        <div className="left-side">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="right-side">
          <h1>Com os melhores profissionais<span>.</span></h1>
          <p>Facilitaremos sua busca para encontrar o profissional, clínica ou laboratório perfeito para os cuidados com a sua saúde, sem precisar se preocupar com o preço.</p>

          <div className="info-about--container">
            <div className="box">
              <AdsClickIcon />
              <h1>Pontual</h1>
              <p>Consultas presenciais com preços baixos</p>
            </div>
            <div className="box">
              <ElectricBoltIcon />
              <h1>Rápido</h1>
              <p>Consultas presenciais com preços baixos</p>
            </div>
            <div className="box">
              <GpsFixedIcon />
              <h1>Localidade</h1>
              <p>Consultas presenciais com preços baixos</p>
            </div>
            <div className="box">
              <WavesIcon />
              <h1>Novas tecnologias</h1>
              <p>Consultas presenciais com preços baixos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}