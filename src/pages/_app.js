import Layout from "~/components/Layout";
import GlobalStyle from "../styles";
import { events } from "~/lib/data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} events={events} />
      </Layout>
    </>
  );
}
