// MUI Icons
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Styles
import './styles.css';

export const BoxExam = () => {
  return (
    <div className="box-exam">
      <h1>Exame médico</h1>
      <h3>R$ 90,00</h3>

      <p>
        <LocationOnOutlinedIcon />
        Campinas
      </p>
    </div>
  )
}