import Navbar from "../componentss/Navbar";
import Hero from "../componentss/Hero";
import AboutImg from "../assets/sikkimcontact.webp";
import Footer from "../componentss/Footer";
import Trip from "../componentss/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
