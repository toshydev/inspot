import Layout from "~/components/Layout";
import GlobalStyle from "../styles";
import { events } from "~/lib/data";
import { uniqueCities } from "~/utils/getCities";

export default function App({ Component, pageProps }) {
  console.log(eventsWithId);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} events={events} cities={uniqueCities} />
      </Layout>
    </>
  );
}
