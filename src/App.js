import { useState, useEffect } from "react";
//Components
import { Map } from "./Components/Map";
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  //Event to render
  const [renderEvent, setRenderEvent] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      //Extract the Array contained in the 'events' field.
      const { events } = await res.json();
      setRenderEvent(events);
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
