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
        <h3>Titulo qualquer</h3>
        <h1>Nossos serviços</h1>
      </div>

      <motion.h1 className="drag">
        Arraste para o lado
        <ArrowRightAltOutlinedIcon />
      </motion.h1>
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {
            services.map((item: servicesProps, index: number) => (
              <Box title={item.title} price={item.price} link={item.link} image={item.image} key={index}/>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  )
}