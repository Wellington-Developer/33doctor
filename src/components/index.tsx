import { About } from "./About"
import { Banner } from "./Banner"
import { CommonQuestions } from "./CommonQuestions"
import { Footer } from "./Footer"
import { Intro } from "./Intro"
import { SlideServices } from "./SlideServices"
import { Testimonials } from "./Testimonials"


export const Home = () => {
  return (
    <>
      <Intro />
      <SlideServices />
      <About />
      <Testimonials />
      <Banner />
      <CommonQuestions />
      <Footer />
    </>
  )
}