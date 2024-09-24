import Navbar from "../componentss/Navbar";
import Hero from "../componentss/Hero";
import AboutImg from "../assets/nightt.jpg";
import Footer from "../componentss/Footer";
import AboutUs from "../componentss/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
