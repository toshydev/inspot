import Geohash from "latlon-geohash";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { useFilterStore } from "../store";
import GlobalStyle from "../styles";
import Head from "next/head";

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
  const { setLocation, currentLocation } = useFilterStore((state) => state);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0,
    };
    const successCallback = ({ coords }) => {
      const [latitude, longitude] = [coords.latitude, coords.longitude];
      const hash = Geohash.encode(latitude, longitude, 9);
      setLocation(hash);
    };
    const errorCallback = (error) => {
      console.log(error);
      alert("Position could not be determined.");
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
  }, [currentLocation, setLocation]);

  return (
    <>
      <Head>
        <title>inSpot</title>
        <meta
          name="viewport"
          content="with=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
