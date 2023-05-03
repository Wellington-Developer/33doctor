// Styles
import { Comment } from '../Types/comments';
import './styles.css';

// Assets
import quoteImg from '../../assets/quote.svg';
import starImg from '../../assets/star.svg'

// Reac Components
import { useEffect, useState } from 'react';

export const Testimonials = () => {
  const [ comments, setComments ] = useState<Comment[]>();
  const [ filteredTestimonial, setFilteredTestimonial ] = useState<Comment>()

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?id=1&id=32&id=3&id=4');
    const data = await response.json()
    setComments(data);
  }

  const getStateId = (id: number) => {
    comments && setFilteredTestimonial(comments[id]);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="testimonial-container">
      <div className="info-side">
        <h3>Avaliação</h3>
        <h1>5 Estrelas!</h1>
      </div>
      <div className="testimonial-side">
        <div className="left-side">
          <div className="people-testimonial">
              { comments &&
                comments.map((comment, index) => (
                  <div className="people-info-container" key={index} onMouseEnter={ () => getStateId(index) }>
                  <div className="people-image"></div>
                    <div className="people-info">
                      <h1>Maria Condado</h1>
                      <p>{comment.email}</p>
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