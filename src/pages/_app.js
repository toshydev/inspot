import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import uniqueCities from "../utils/getCities";
import { getSortedEvents, getEventsOfCity } from "../utils/getEvents";
import { events } from "../lib/data";
import { useFilterStore } from "../store";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState([]);
  const { city, currentLocation } = useFilterStore((state) => state);
  const sortedEventsOfCity = getEventsOfCity(city, getSortedEvents(events));

  useEffect(() => {
    const options = { enableHighAccuracy: true, timeout: 10000 };
    const successCallback = ({ coords }) => {
      const [latitude, longitude] = [coords.latitude, coords.longitude];
      setUserLocation([latitude, longitude]);
      console.log(userLocation);
    };
    const errorCallback = (error) => {
      console.log(error);
    };
    if (currentLocation) {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback,
          options
        );
      }
    }
  }, [userLocation, currentLocation]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          events={sortedEventsOfCity}
          cities={uniqueCities}
        />
      </Layout>
    </>
  );
}
