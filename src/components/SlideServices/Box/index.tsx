// Styles
import { Button } from '../../Utils/Button';
import './styles.css'

type servicesProps = {
  title: string,
  type: string,
  price?: number,
  link: string,
  image: HTMLElement | SVGElement | any,
}

export const Box = ({ title, price, link, image, type }: servicesProps) => {


  return (
    <div className="item">
      <div className="box-info">
        <div className="info-card">
          <img src={image} alt="icons about each exam"/>
          <h1>{title} <span>{type}</span></h1>
        </div>
        <div className="price">
            {
              price ? (
                <h3>A partir de <span>R$ {price},00</span></h3>
              ) : <h3>Consultar valores</h3>
            }
            <Button link={link} />
            <h6>Rede particular</h6>
        </div>
      </div>
    </div>
  )
}