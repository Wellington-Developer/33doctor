// Styles
import { Button } from '../../Utils/Button';
import './styles.css'

type servicesProps = {
  title: string,
  price?: number,
  link: string,
}

export const Box = ({ title, price, link }: servicesProps) => {


  return (
    <div className="item">
      <div className="box-info">
        <div className="info-card">
          <h1>{title}</h1>
        </div>
        <div className="price">
            {
              price ? (
                <h3>A partir de <span>R$ {price},00</span></h3>
              ) : <h3>-</h3>
            }
            <Button link={link} />
        </div>
      </div>
    </div>
  )
}