import './styles.css';
import EastIcon from '@mui/icons-material/East';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode,
  link?: string,
  internalLink?: string,
  // any props that come into the component
}

export const Button = ({ children, link, internalLink }: Props) => {
  return (
    internalLink ? (
      <a href={internalLink}>
      <button className="button">
        {
          children ? 
          children : 'Agendar'
        }
        <EastIcon />
      </button>
    </a>
    ) : (
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
  )
}