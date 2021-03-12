import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallenegesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
