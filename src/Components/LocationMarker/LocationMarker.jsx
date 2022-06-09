import React from "react";
import { RiHome2Line } from "react-icons/ri";
import "./LocationMarker.css";
const LocationMarker = ({ onClick }) => {
  return (
    <div onClick={onClick} className='locationMarker'>
      <RiHome2Line />
    </div>
  );
};

export { LocationMarker };
