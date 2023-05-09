import { BoxFilter } from './BoxFilter/BoxFIlter';
import './styles.css';

// Data
import { useState } from 'react';

import { Link } from 'react-router-dom';

export const Filter = ({ filteredData }: any) => {

  const [ search, setSearch ] = useState('');

  const filtered = filteredData.filter((singleData: any) => singleData.title.toLowerCase().includes(search.toLocaleLowerCase()))

  type ResultProps = {
    title: string,
    locale: string,
    price: number,
  }

  return (
    <div className="filter-container">
      <div >
        <div className="titles">
          <h1>A partir de R$ xx,xx</h1>
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
                filtered.map((item: ResultProps, index: number) => (
                  <Link to={`https://wa.me/556281470582?text=Tenho%20interesse%20em%20um(a)%20${item.title}%20pelo%20preço%20de%20R$%20${item.price}%20em%20${item.locale}`}>
                    <BoxFilter title={item.title} locale={item.locale} price={item.price} key={index} />
                  </Link>
                  ))
              }
          </div>

      </div>
    </div>
    
  )
}