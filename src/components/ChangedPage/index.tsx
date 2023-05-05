import { useParams } from 'react-router-dom';
import { data } from '../../data/data';
import './styles.css'
import { Filter } from './Filter';

export const ChangedPage = () => {
  const { id } = useParams();

  const filteredData = id && data.filter((dat) => dat.title.toLowerCase().includes(id.toLocaleLowerCase()))
  
  return (
    <div className="changed-page--container">
      <div className="banner">
        <h1>{id?.toUpperCase()}</h1>
      </div>

      <Filter filteredData={filteredData} />
    </div>
  )
}