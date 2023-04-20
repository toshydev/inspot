import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect } from "react";

export default function useDistance(location, event, setDistance) {
  useEffect(() => {
    const id = setInterval(() => {
      if (location && event._embedded.venues[0].location) {
        const latLon = Geohash.decode(location);
        setDistance(
          getDistance(
            { latitude: latLon.lat, longitude: latLon.lon },
            {
              latitude: event._embedded.venues[0].location.latitude,
              longitude: event._embedded.venues[0].location.longitude,
            }
          )
        );
      }
    }, 5000);
    return () => clearInterval(id);
  }, [location, event, setDistance]);
}
