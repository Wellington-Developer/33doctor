// Components
import { Box } from "./Box";

// Framer Motion
import { motion } from "framer-motion";

// React Hooks
import { useState, useEffect, useRef } from "react";

// Styles
import './styles.css'

// MUI Icons
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


// Data
import { services } from "../../data/services";

// Assets
import doctorMaleImg from '../../assets/icons/doctor_male.svg';
import heartCardiogramImg from '../../assets/icons/heart_cardiogram.svg';
import microscopeImg from '../../assets/icons/microscope.svg';
import opthalmologyImg from '../../assets/icons/opthalmology.svg';
import hospitalizedImg from '../../assets/icons/hospitalized.svg';
import tac from '../../assets/icons/tac.svg';

export const SlideServices = () => {
  const carousel = useRef<null | HTMLDivElement>(null);
  const [ width, setWidth ] = useState(0)

  const images = [ tac, microscopeImg, doctorMaleImg, heartCardiogramImg, opthalmologyImg, hospitalizedImg ]

  useEffect(() => {
    carousel.current && setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [])

  services.map((item) => console.log(item))

  return (
    <div className="slide-container" id="services">
      <div className="info">
        <h1>Agendar agora com até <br /><span>60% de desconto</span></h1>
        <h3>Leve apenas alguns minutos</h3>
      </div>

      <h1 className="drag">
        Arraste para o lado
        <ArrowRightAltOutlinedIcon />
      </h1>

      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {
            services &&
            services.map((item, index): any => {
              return <Box title={item.title} price={item.price} link={item.link} image={images[index]} key={index} />
            })
          }
        </motion.div>
      </motion.div>
    </div>
  )
}