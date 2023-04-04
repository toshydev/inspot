import Layout from "~/components/Layout";
import GlobalStyle from "../styles";
import { events } from "~/lib/data";
import uniqueCities from "~/utils/getCities";
import uniqueGenres from "~/utils/getGenres";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          events={events}
          cities={uniqueCities}
          genres={uniqueGenres}
        />
      </Layout>
    </>
  );
}
