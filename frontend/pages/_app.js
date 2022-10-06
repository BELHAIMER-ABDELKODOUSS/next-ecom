import "../styles/globals.css";
import { createClient, Provider } from "urql";
import { Nav } from "../components/Nav";
import { StatContext } from "../lib/context";
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
function MyApp({ Component, pageProps }) {
  return (
    <StatContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StatContext>
  );
}

export default MyApp;
