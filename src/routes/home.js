import Navbar from "../componentss/Navbar";
import Hero from "../componentss/Hero";
import Destination from "../componentss/Destination";
import Trip from "../componentss/Trip";
import Footer from "../componentss/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://lp-cms-production.imgix.net/2019-06/75322601.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
