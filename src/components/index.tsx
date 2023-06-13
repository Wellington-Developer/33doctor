import { About } from "./About"
import { Banner } from "./Banner"
// import { CommonQuestions } from "./CommonQuestions"
import { Intro } from "./Intro"
import { SlideServices } from "./SlideServices"
import { Testimonials } from "./Testimonials"
import { Head } from "./Utils/Head"


export const Home = () => {
  return (
    <div id="home">
      <Head title="Home" />
      <Intro />
      <SlideServices />
      <About/>
      <Testimonials />
      <Banner />
    </div>
  )
}