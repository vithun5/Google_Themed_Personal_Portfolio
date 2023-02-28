import { useContext } from "react";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";
const Map = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7777.477305369583!2d80.1521026!3d12.924511699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI4LjIiTiA4MMKwMDknMDcuMiJF!5e0!3m2!1sen!2sin!4v1677493549196!5m2!1sen!2sin"
        width="100%"
        height="500"
        allowfullScreen=""
        style={{
          border: "0px",
          ...(darkMode && { filter: "invert(90%)" }),
        }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapContainer>
  );
};

export default Map;
