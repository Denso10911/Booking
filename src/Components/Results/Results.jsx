import React from "react";
import useSupercluster from "use-supercluster";
import "./Results.css";

const Results = ({ points, bounds, chosenCluster }) => {
  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom: 20,
    options: { radius: 75, maxZoom: 20 },
  });
  return (
    <div className='container__results'>
      <ul className='results__list'>
        {chosenCluster
          ? chosenCluster.map((cluster) => {
              return (
                <li className='results__item' key={cluster.properties.eventKey}>
                  <div className='results__title'>
                    {cluster.properties.eventTitle}
                  </div>
                </li>
              );
            })
          : clusters.map((cluster) => {
              return (
                <li className='results__item' key={cluster.properties.eventKey}>
                  <div className='results__title'>
                    {cluster.properties.eventTitle}
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export { Results };
