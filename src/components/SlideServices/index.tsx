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

export const SlideServices = () => {
  const carousel = useRef<null | HTMLDivElement>(null);
  const [ width, setWidth ] = useState(0)

  type servicesProps = {
    title: string,
    price: number,
    link: string,
    image: string
  }

  useEffect(() => {
    carousel.current && setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [])

  return (
    <div className="slide-container">
      <div className="info">
        <h3>Agendamento</h3>
        <h1>Qual exame ou consulta você quer agendar?</h1>
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
            services.map((item: servicesProps, index: number) => (
              <Box title={item.title} price={item.price} link={item.link} key={index}/>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  )
}