import Head from "next/head";

import Navbar from "../components/navbar";

import { Container, Content, Welcome } from "../styles/pages/index.js";

const App = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Navbar />

      <Container>
        <Content>
          <Welcome>
            <h1>
              Developer <br /> is a artist.
            </h1>
          </Welcome>
        </Content>
      </Container>
    </>
  );
};

export default App;
