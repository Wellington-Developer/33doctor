import { BoxFilter } from './BoxFilter/BoxFIlter';
import './styles.css';

// Data
import { useState } from 'react';

import { Link } from 'react-router-dom';

export const Filter = ({ filteredData }: any) => {

  const [ search, setSearch ] = useState('');

  const filtered = filteredData.filter((singleData: any) => singleData.title.toLowerCase().includes(search.toLocaleLowerCase()))

  type ResultProps = {
    name: string,
    locale: string,
    price: number,
  }

  return (
    <div className="filter-container">
      <div >
        <div className="filter">
          <div className="filter-input">
            <input type="text" placeholder="Qual exame você quer agendar?" 
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>
        
          <div className="filter-items">
            {
              filtered.map((item: ResultProps, index: number) => (
                <Link to={'/singlepage/'+item.name}>
                  <BoxFilter title={item.name} locale={item.locale} price={item.price} key={index} />
                </Link>
                ))
            }
          </div>

      </div>
    </div>
    
  )
}