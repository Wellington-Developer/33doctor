// Styles
import { Button } from '../../Utils/Button';
import './styles.css'

// Hooks
import { useState } from 'react';

type servicesProps = {
  title: string,
  price: number,
  link: string,
  image: string
}

export const Box = ({ title, price, link, image }: servicesProps) => {
  const [ classActive, setClassActive ] = useState(false);


  return (
    <div className={ classActive ? "item active" : "item" } onMouseEnter={ () => setClassActive(true) } onMouseLeave={ () => setClassActive(false) }>
      <img src={image} alt="medic" />
      {
        classActive ?
        (
          <div className="box-active">
            <h1>{title}</h1>
            <h3>A partir de <span>R$ {price}</span></h3>
            <Button link={link} />
          </div>
        )
        :
        (
          <div className="box-inative">
            <h1>{title}</h1>
          </div>
        ) 
      }
    </div>
  )
}