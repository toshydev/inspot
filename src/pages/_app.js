import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import uniqueCities from "../utils/getCities";
import sortedEvents from "../utils/sortEvents";
import { useFilterStore } from "../store";

export default function App({ Component, pageProps }) {
  const city = useFilterStore((state) => state.city);

  const events = city
    ? sortedEvents.filter((event) => {
        const addressArray = event.location.address.split(",");
        const postalCity = addressArray[addressArray.length - 2];
        const cityString = postalCity?.replace(/\d+/, "").trim();
        return cityString === city;
      })
    : sortedEvents;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} events={events} cities={uniqueCities} />
      </Layout>
    </>
  );
}
