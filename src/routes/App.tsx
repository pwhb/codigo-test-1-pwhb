import { useEffect } from "react";
import "./App.css";

function App()
{
  return (
    <>

      <div className="mx-auto bg-black canvas">
        <video src="https://tv.apple.com/us/show/the-buccaneers/umc.cmc.g28hcpusm23xbs9zwvnwn9re?ctx_brand=tvs.sbd.4000"></video>


      </div>

      <QAndA />
    </>
  );
}


function QAndA()
{
  return <>
    <p className="branding-lockup__content__title">Questions? Answers.</p>
  </>;
}


export default App;
