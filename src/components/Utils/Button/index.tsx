import './styles.css';
import EastIcon from '@mui/icons-material/East';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode,
  link?: string
  // any props that come into the component
}

export const Button = ({ children, link }: Props) => {
  return (
    <Link to={link || "#todos"}>
      <button className="button">
        {
          children ? 
          children : 'Agendar'
        }
        <EastIcon />
      </button>
    </Link>
  )
}