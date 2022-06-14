import { useState, useEffect } from "react";
//Components
import { Map } from "./Components/Map";
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";
import { data } from "./assets/data/data";

function App() {
  const [loading, setLoading] = useState(false);
  //Event to render
  const [renderOffer, setRenderOffer] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      setRenderOffer(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Header offerData={renderOffer} setOfferData={setRenderOffer} />
      {!loading ? <Map offerData={renderOffer} /> : <Loader />}
    </div>
  );
}

export default App;
