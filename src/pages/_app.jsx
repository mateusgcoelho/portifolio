import GlobalStyle from "../styles/global";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;
