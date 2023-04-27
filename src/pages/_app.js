import Geohash from "latlon-geohash";
import Head from "next/head";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useFilterStore, useWindowStore } from "../store";
import GlobalStyle from "../styles";
import { SessionProvider } from "next-auth/react";

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
  const setLocation = useFilterStore((state) => state.setLocation);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const setWidth = useWindowStore((state) => state.setWidth);
  const setHeight = useWindowStore((state) => state.setHeight);

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

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setWidth(width);
    setHeight(height);
  }, [width, height, setWidth, setHeight]);

  return (
    <>
      <Head>
        <title>inSpot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="facebook-domain-verification" content="nvo7k1rhrxrskeo7t7ghwgy30truo2" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
