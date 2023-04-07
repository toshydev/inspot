import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import uniqueCities from "../utils/getCities";
import { getSortedEvents, getEventsOfCity } from "../utils/getEvents";
import { events } from "../lib/data";
import { useFilterStore } from "../store";

export default function App({ Component, pageProps }) {
  const city = useFilterStore((state) => state.city);
  const sortedEventsOfCity = getEventsOfCity(city, getSortedEvents(events));

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
