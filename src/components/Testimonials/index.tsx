// Styles
import { Comment } from '../Types/comments';
import './styles.css';

// Assets
import quoteImg from '../../assets/quote.svg';
import starImg from '../../assets/star.svg';

import dralluImg from '../../assets/peoples-testimonial/drallu-burgget.png';
import carlaImg from '../../assets/peoples-testimonial/carla-natasha.png';
import maianeImg from '../../assets/peoples-testimonial/maiane-pereira.png';
import rayaneImg from '../../assets/peoples-testimonial/rayane-brito.png';


// Data
import { testimonialData } from '../../data/testimonial';

// Hooks
import { useState } from 'react';

export const Testimonials = () => {
  const images = [dralluImg, carlaImg, maianeImg, rayaneImg];
  const [ filteredTestimonial, setFilteredTestimonial ] = useState<Comment>()

  const getStateId = (id: number) => {
    testimonialData && setFilteredTestimonial(testimonialData[id]);
  }

  return (
    <div className="testimonial-container">
      <div className="info-side">
        <h3>Avaliação</h3>
        <h1>O que estão falando sobre nós?</h1>
      </div>
      <div className="testimonial-side">
        <div className="left-side">
          <div className="people-testimonial">
              { testimonialData &&
                testimonialData.map((comment, index) => (
                  <div className="people-info-container" key={index} onMouseEnter={ () => getStateId(index) }>
                  <div className="people-image">
                    <img src={images[index]} alt="person"/>
                  </div>
                    <div className="people-info">
                      <h1>{comment.name}</h1>
                      <p>{comment.description}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>

        <div className="right-side">
          <div className="comment-testimonial">
            <div className="quote">
              <img src={quoteImg} alt="quote" />
            </div>
            <h1>
              <img src={starImg} alt="star"/>
              5 estrelas!
            </h1>
              {
                filteredTestimonial ? (
                  <p>
                    {filteredTestimonial.body}
                  </p>
                ) : (
                  <p>
                    “Atendeu todas minhas expectativas, consegui marcar uma consulta rapidamente sem me preocupar com o preço. Parabéns ao idealizador!”
                  </p>
                )
              }
          </div>
        </div>
      </div>
    </div>
  )
}