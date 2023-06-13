import { Button } from "../Utils/Button";
import { Link, useParams } from 'react-router-dom';

// Assets
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import bannerImg from '../../assets/singleproduct.jpeg';
import { data } from "../../data/data";

// Styles
import './styles.css';

// Hooks
import {useState} from 'react';

// MUI Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Head } from "../Utils/Head";

export const SinglePageProduct = () => {
  const { id } = useParams()

  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const link = `https://wa.me/556239338700?text=Olá,%20me%20chamo%20${name}%20e%20tenho%20interesse%20na%20categoria%20'${id}'.`
  const handleChange = (event: any) => {
    setName(event.target.value);
  }
  const filteredData = id && data.filter((dat) => dat.name.toLowerCase().includes(id.toLocaleLowerCase().replace('-', ' ')))

  return (
    <div className="container-page--product">
      {
        filteredData &&
        <Head title={filteredData[0].title} />
      }
      <div className="left-side">
        <div className="info-product">
          <h1>Agendar <span>{filteredData && filteredData[0].name}</span> em Goiânia</h1>
          <div className="bradcumb">
            <Link to="/">Início</Link>
            <ChevronRightIcon />
            {
              filteredData && 
              <Link to={'/agendamentos/'+filteredData[0].type}>Páginas</Link>
            }
            <ChevronRightIcon />
            {filteredData &&
          
            <Link to={`/${filteredData[0].type}/`+filteredData[0].name} id="link">{filteredData[0].name}</Link>
            }
          </div>
        </div>

        <div className="cta-info">
          <div className="img-cta">
            <AdsClickIcon />
          </div>

          <p>
            {filteredData && filteredData[0].description1}
          </p>

          <Button internalLink="#agendar" />

        </div>

        <div className="box-container--cta">
          <div className="box-cta">
            <AdsClickIcon />
            <div className="info-box">
              <h1>Valores acessíveis</h1>
              <p>Consultas e exames com 60% de desconto.</p>
            </div>
          </div>

          <div className="box-cta">
            <ElectricBoltIcon />
            <div className="info-box">
              <h1>Agendamento Rápido</h1>
              <p>Agendar é super símples, fácil e rápido.</p>
            </div>
          </div>

          <div className="box-cta">
            <GpsFixedIcon />
            <div className="info-box">
              <h1>Rede particular próxima</h1>
              <p>Agendamento na rede particular mais próxima a você.</p>
            </div>
          </div>
        </div>
        
        <p className={active ? "text active" : "text"}>
        {filteredData && filteredData[0].description2}<br/><br/>
        {filteredData && filteredData[0].description3}
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
            <form>
              <input type="text" placeholder="Seu nome" value={name} onChange={handleChange} />
            </form>
                <Button link={link}/>
            </div>
        </div>
      </div>
    </div>
  ) 
  
}