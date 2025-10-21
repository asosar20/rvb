import Banner from "../../components/Banner";
import LandingLayout from "../../layouts/LandingLayout";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

export default function LandingPage() {
  return (
    <LandingLayout>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Banner/>
      </section>
      <section id="aboutUs">
        <AboutUs />
      </section>
       <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* Aquí irán las demás secciones */}
    </LandingLayout>
  );
}
