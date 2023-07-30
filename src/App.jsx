import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Project from "./sections/Project";
import HorizontalNavBar from "./components/HorizontalNavBar";

function App() {
  return (
    <div className="font-lepeta tracking-tighter text-white bg-[#181818]">
      <HorizontalNavBar />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
