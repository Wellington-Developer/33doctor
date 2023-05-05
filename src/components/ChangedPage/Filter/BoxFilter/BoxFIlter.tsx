// Styles
import './styles.css';

// MUI Icons
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

type ResultProps = {
  title: string,
  locale: string,
  price: number,
}

export const BoxFilter = ({title, locale, price}: ResultProps) => {
  return (
    <div className="box-filter">
      <h1>{title}</h1>
      <div className="info-filter--box">
        <p>
          <RoomOutlinedIcon />
          {locale}
        </p>
        <h3>R$ {price},00</h3>
      </div>
    </div>
  )
}