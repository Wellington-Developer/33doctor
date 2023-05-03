import { BoxFilter } from './BoxFilter/BoxFIlter';
import './styles.css';

// Data
import { data } from '../../data/data';
import { useState } from 'react';

export const Filter = () => {
  const [ search, setSearch ] = useState('');

  const filteredData = data.filter((singleData) => singleData.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="filter-container">
      <div >
        <div className="titles">
          <h1>A partir de R$ xx,xx</h1>
          <div className="title">
            <a href="https://www.google.com.br/">Consutlas</a>
            <a href="https://www.google.com.br/">Oftalmo</a>
            <a href="https://www.google.com.br/">Imagem</a>
            <a href="https://www.google.com.br/">Cardiológico</a>
            <a href="https://www.google.com.br/">Laboratório</a>
          </div>
        </div>

        <div className="filter">
          <div className="filter-input">
            <input type="text" placeholder="Do que você precisa?" 
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>

          <div className="filter-right">
            <h1>Preço</h1>
            <h1>Localidade</h1>
          </div>
        </div>
        
        <div className="filter-items">
            {
              filteredData.map((dat, index) => (
                <BoxFilter title={dat.title} locale={dat.locale} price={dat.price} key={index}/>
              ))
            }
        </div>

      </div>
    </div>
    
  )
}