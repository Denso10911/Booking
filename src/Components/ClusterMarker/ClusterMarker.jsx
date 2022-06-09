import React, { useState, useEffect } from "react";
import "./ClusterMarker.css";

const ClusterMarker = ({
  id,
  addSize,
  changeSize,
  clickClusterHandler,
  pointCount,
  clusterBG,
  setClusterBG,
}) => {
  return (
    <div
      className='cluster__marker'
      style={{
        width: `${addSize + changeSize}px`,
        height: `${addSize + changeSize}px`,
        backgroundColor: `${
          clusterBG === id ? "rgb(50, 171, 201)" : "rgb(50, 85, 201)"
        }`,
      }}
      onClick={() => {
        clickClusterHandler(id);
        setClusterBG(id);
      }}
    >
      {pointCount}
    </div>
  );
};

export { ClusterMarker };
