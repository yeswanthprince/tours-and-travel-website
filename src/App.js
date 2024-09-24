import "./styles.css";
import { Routes } from "react-router-dom";
import Home from "./routes/home";
import { Route } from "react-router-dom";
import About from "./routes/about";
import Service from "./routes/service";
import Contact from "./routes/contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
