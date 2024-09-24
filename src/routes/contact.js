import Navbar from "../componentss/Navbar";
import Hero from "../componentss/Hero";
import AboutImg from "../assets/meghalayaa.jpg";
import Footer from "../componentss/Footer";
import ContactForm from "../componentss/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
