import { About } from "./About"
import { Banner } from "./Banner"
import { Header } from "./Header"
import { Intro } from "./Intro"
import { SlideServices } from "./SlideServices"
import { Testimonials } from "./Testimonials"


export const Home = () => {
  return (
    <>
      <Intro />
      <SlideServices />
      <About />
      <Banner />
      <Testimonials />
    </>
  )
}