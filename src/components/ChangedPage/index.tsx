import { useParams } from 'react-router-dom';
import { data } from '../../data/data';
import './styles.css'
import { Filter } from './Filter';
import bannerImg from '../../assets/shape.png';
import { Head } from '../Utils/Head';

export const ChangedPage = () => {
  const { id } = useParams();

  const filteredData = id && data.filter((dat) => dat.type.toLowerCase().includes(id.toLocaleLowerCase()))

  return (
    <>
    <Head title='Agendamentos'/>
      <div className="changed-page--container">
        <div className="banner">
          <img src={bannerImg} alt="banner"/>
          <h1>Exames de {id} em Goiânia</h1>
          <p>Agende seu exame com até <span>60% de desconto</span> na rede particular</p>
        </div>

        <Filter filteredData={filteredData} />
      </div>
    </>
  )
}