import { useState, useEffect } from "react";
//Components
import { Map } from "./Components/Map";
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";
import { data } from './assets/data/data';

function App() {
  const [loading, setLoading] = useState(false);
  //Event to render
  const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      
      setRenderEvent(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={renderEvent} /> : <Loader />}
    </div>
  );
}

export default App;
