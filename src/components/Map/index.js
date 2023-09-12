"use client";

import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ address = "" }) => {
  const [map, setMap] = useState(null);
  const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["drawing"],
  });

  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 16,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return (
    <div id="map" style={{ height: "400px" }} className="rounded-lg"></div>
  );
};
export default Map;
