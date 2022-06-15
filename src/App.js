import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

//Components
import { Map } from "./Components/Map";
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  //offer to render
  const [renderOffer, setRenderOffer] = useState([]);
  const offersCollectionRef = collection(db, "offers");
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const getOffers = async () => {
        const data = await getDocs(offersCollectionRef);
        setRenderOffer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getOffers();
      setLoading(false);
    };
    fetchEvents();
  }, [offersCollectionRef]);
  return (
    <div>
      <Header
        offerData={renderOffer}
        setOfferData={setRenderOffer}
        offersCollectionRef={offersCollectionRef}
      />
      {!loading ? <Map offerData={renderOffer} /> : <Loader />}
    </div>
  );
}

export default App;
