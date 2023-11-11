import "./App.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Cards from "../components/Cards";

function App()
{
  return (
    <>

      <div className="mx-auto bg-black canvas">
        <video src="https://tv.apple.com/us/show/the-buccaneers/umc.cmc.g28hcpusm23xbs9zwvnwn9re?ctx_brand=tvs.sbd.4000"></video>


      </div>

      <FAQ />
      <Cards />
      <Footer />
    </>
  );
}



export default App;
