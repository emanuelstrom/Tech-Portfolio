import "./App.css";
import BackgroundVideo from "../video/BackgroundVideo";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
