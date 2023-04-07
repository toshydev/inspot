import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import uniqueCities from "../utils/getCities";
import { getSortedEvents, getEventsOfCity } from "../utils/getEvents";
import { events } from "../lib/data";
import { useFilterStore } from "../store";
import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";

const BASE_URL = "https://nominatim.openstreetmap.org/reverse?format=jsonv2";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState([]);
  const { city, setCity, currentLocation } = useFilterStore((state) => state);

  const sortedEventsOfCity = getEventsOfCity(city, getSortedEvents(events));

  const { data } = useSWR(
    userLocation && currentLocation
      ? `${BASE_URL}&lat=${userLocation[0]}&lon=${userLocation[1]}&zoom=10`
      : null,
    fetcher,
    {
      refreshInterval: 600000,
    }
  );

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
    };
    const successCallback = ({ coords }) => {
      const [latitude, longitude] = [coords.latitude, coords.longitude];
      setUserLocation([latitude, longitude]);
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

  useEffect(() => {
    if (currentLocation) {
      data ? setCity(data.address.city) : null;
    }
  }, [currentLocation, data, setCity]);

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Layout>
          <Component
            {...pageProps}
            events={sortedEventsOfCity}
            cities={uniqueCities}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
