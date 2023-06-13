// Styles
import { Button } from '../../Utils/Button';
import './styles.css'



export const Box = ({ title, price, link, image }: any) => {


  return (
    <div className="item">
      <div className="box-info">
        <div className="info-card">
          <h1>{title} <span></span></h1>
          <img src={image} alt="icons about each exam"/>
        </div>
        <div className="price">
            {
              price === 0 ? (<h3>Consultar</h3>) :
              <h3>A partir de <br></br><span>R$ {price},00</span></h3>
            }
            <Button link={link}/>
            <h6>Rede particular</h6>
        </div>
      </div>
    </div>
  )
}