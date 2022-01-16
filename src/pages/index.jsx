import Head from "next/head";

import Button from "../components/button";
import Navbar from "../components/navbar";

import {
  Container,
  Content,
  Welcome,
  WelcomeTexts,
  WelcomeControllers,
} from "../styles/pages/index.js";

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
            <WelcomeTexts>
              <h1>Developer</h1>
              <span>is a artist.</span>
            </WelcomeTexts>

            <WelcomeControllers>
              <Button>Ver Trabalhos</Button>
              <Button theme="dark">Sobre</Button>
            </WelcomeControllers>
          </Welcome>
        </Content>
      </Container>
    </>
  );
};

export default App;
