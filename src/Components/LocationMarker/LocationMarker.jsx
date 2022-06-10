import React from "react";
import { RiHome2Line } from "react-icons/ri";
import "./LocationMarker.css";
const LocationMarker = ({
  cluster,
  setChosenCluster,
  clusterBG,
  setClusterBG,
}) => {
  const handlerClick = (id) => {
    setClusterBG(id);
    setChosenCluster([cluster]);
  };

  return (
    <div
      onClick={() => {
        handlerClick(cluster.properties.offerKey);
      }}
      className='locationMarker'
      style={{
        position: "absolute",
        top: "-10px",
        left: "-10px",
        backgroundColor: `${
          clusterBG === cluster.properties.offerKey
            ? "rgb(50, 171, 201)"
            : "rgb(50, 85, 201)"
        }`,
      }}
    >
      <RiHome2Line />
    </div>
  );
};

export { LocationMarker };
