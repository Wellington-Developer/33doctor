// Styles
import { Button } from '../../Utils/Button';
import './styles.css'

// Hooks
import { useState } from 'react';


export const Box = () => {
  const [ classActive, setClassActive ] = useState(false);

  return (
    <div className={ classActive ? "item active" : "item" } onMouseEnter={ () => setClassActive(true) } onMouseLeave={ () => setClassActive(false) }>
      <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="medic" />
      {
        classActive ?
        (
          <div className="box-active">
            <h1>Exames de Imagem</h1>
            <h3>A partir de <span>R$ XX,XX</span></h3>
            <Button />
          </div>
        )
        :
        (
          <div className="box-inative">
            <h1>Exames de Imagem</h1>
          </div>
        ) 
      }
    </div>
  )
}