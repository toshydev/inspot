import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect } from "react";
import { Event, Venue } from "../utils/types";

export default function useDistance(
  location: string,
  item: Event | Venue,
  setDistance: (arg0: number) => number,
  type: string
) {
  useEffect(() => {
    if ("_embedded" in item) {
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
    }
    if ("location" in item) {
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
