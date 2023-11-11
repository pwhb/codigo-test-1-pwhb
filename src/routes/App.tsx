import "./App.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Cards from "../components/Cards";
import Devices from "../components/Devices";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Lineup from "../components/Lineup";

function App()
{
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Lineup />
      <Devices />
      <FAQ />
      <Cards />
      <Footer />
    </>
  );
}



export default App;
