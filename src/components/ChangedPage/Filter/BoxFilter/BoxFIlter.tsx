// Styles
import './styles.css';

// MUI Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type ResultProps = {
  title: string,
  locale: string,
  price: number,
}

export const BoxFilter = ({title}: ResultProps) => {
  return (
    <div className="box-filter">
      <div className="box-filter--info">
        <h1>{title}</h1>
        <ChevronRightIcon />
      </div>
    </div>
  )
}