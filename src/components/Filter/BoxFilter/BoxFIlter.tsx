// Styles
import './styles.css';

// MUI Icons
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

export const BoxFilter = () => {
  return (
    <div className="box-filter">
      <h1>Consulta cardiologista</h1>
      <div className="info-filter--box">
        <p>
          <RoomOutlinedIcon />
          Campinas
        </p>
        <h3>R$ 90,00</h3>
      </div>
    </div>
  )
}