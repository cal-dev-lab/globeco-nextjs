import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/fonts.css";

// TODO: 10 Dec 2021 - Install AOSJS, init here to use across all components.
// TODO: Solution: https://github.com/michalsnik/aos/issues/574

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
