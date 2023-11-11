import "./App.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

function App()
{
  return (
    <>

      <div className="mx-auto bg-black canvas">
        <video src="https://tv.apple.com/us/show/the-buccaneers/umc.cmc.g28hcpusm23xbs9zwvnwn9re?ctx_brand=tvs.sbd.4000"></video>


      </div>

      <FAQ />
      <Footer />
    </>
  );
}


function QAndA()
{
  return <>
    <p className="text-4xl font-bold text-center">Questions? Answers.</p>
  </>;
}


export default App;
