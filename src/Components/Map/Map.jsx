import GoogleMapReact from "google-map-react";
import useSuperCluster from "use-supercluster";
import React, { useRef, useState } from "react";
//Components
import { Results } from "../Results";
import { LocationMarker } from "../LocationMarker";
import { ClusterMarker } from "../ClusterMarker";

//Style
import "./Map.css";

const Map = ({ center, eventData }) => {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [bounds, setBounds] = useState(null);
  const [chosenCluster, setChosenCluster] = useState(null);
  const [clusterBG, setClusterBG] = useState(null);
  //Set up the geo-features. Do not need them anymore.
  const points = eventData.map((event) => ({
    type: "Feature",
    properties: {
      cluster: false,
      eventKey: event.id,
      eventTitle: event.title,
      eventType: event.categories[0].id,
    },
    geometry: {
      type: "Point",
      coordinates: [
        event.geometries[0].coordinates[0],
        event.geometries[0].coordinates[1],
      ],
    },
  }));

  //Get clusters
  const { clusters, supercluster } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  //Get chosen cluster result
  const clickClusterHandler = (id) => {
    let limit = Infinity;
    let result = supercluster.getLeaves(id, limit);
    setChosenCluster(result);
  };

  return (
    <div className='container__map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
        onClick={() => {
          setChosenCluster(null);
          setClusterBG(null);
        }}
        onDrag={() => {
          setChosenCluster(null);
          setClusterBG(null);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            let changeSize = Math.round((pointCount / points.length) * 100);
            let addSize = Math.min(changeSize * 10, 40);

            return (
              <ClusterMarker
                key={cluster.id}
                lat={latitude}
                lng={longitude}
                id={cluster.id}
                addSize={addSize}
                changeSize={changeSize}
                clickClusterHandler={clickClusterHandler}
                pointCount={pointCount}
                clusterBG={clusterBG}
                setClusterBG={setClusterBG}
              />
            );
          } else {
            return (
              <LocationMarker
                key={cluster.properties.eventKey}
                lat={latitude}
                lng={longitude}
                onClick={() => setChosenCluster([cluster])}
              />
            );
          }
        })}
      </GoogleMapReact>
      <Results points={points} bounds={bounds} chosenCluster={chosenCluster} />
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 29.305561,
    lng: -3.981108,
  },
};

export { Map };