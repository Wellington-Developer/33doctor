import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Styles
import './styles.css';

// Data
import { accordionQuestions } from '../../data/accordion';

export const CommonQuestions = () => {

  return (
    <div className="questions-container">
      <div className="left-side">
        <h1>Perguntas Frequentes<span>.</span></h1>
        <p>Caso surja uma dúvida que não foi listada aqui não hesite em entrar em contato conosco!</p>
      </div>

      <div className="right-side">
        <div className="question">
        {
          accordionQuestions.map((item, index) => (
            <Accordion key={index} id="accordion" >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <AddOutlinedIcon />
                <Typography id="tipography">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {
                    item.paragraph
                  }
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
        </div>
      </div>
    </div>
  )
}