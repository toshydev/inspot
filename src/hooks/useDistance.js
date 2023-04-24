import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect } from "react";

export default function useDistance(location, item, setDistance, type) {
  useEffect(() => {
    if (type === "event") {
      const id = setInterval(() => {
        if (location && item._embedded.venues[0].location) {
          const latLon = Geohash.decode(location);
          setDistance(
            getDistance(
              { latitude: latLon.lat, longitude: latLon.lon },
              {
                latitude: item._embedded.venues[0].location.latitude,
                longitude: item._embedded.venues[0].location.longitude,
              }
            )
          );
        }
      }, 5000);
      return () => clearInterval(id);
    } else {
      const id = setInterval(() => {
        if (location && item.location) {
          const latLon = Geohash.decode(location);
          setDistance(
            getDistance(
              { latitude: latLon.lat, longitude: latLon.lon },
              {
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              }
            )
          );
        }
      }, 5000);
      return () => clearInterval(id);
    }
  }, [location, item, setDistance, type]);
}
