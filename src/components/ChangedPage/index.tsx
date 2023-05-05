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
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80" alt="banner"/>
        <h1>{id?.toUpperCase()}</h1>
      </div>

      <Filter filteredData={filteredData} />
    </div>
  )
}