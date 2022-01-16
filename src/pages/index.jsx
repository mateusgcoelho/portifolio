import Head from "next/head";

import Button from "../components/button";
import Navbar from "../components/navbar";

import {
  Container,
  Content,
  Welcome,
  WelcomeTexts,
  WelcomeControllers,
  AboutMe,
  TechnologiesWrapper,
  TechnologiesList,
  UserProfile,
  Divisor,
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

          <AboutMe>
            <UserProfile />

            <p>
              Vercel combines the best developer experience with an obsessive
              focus on end-user performance. Our platform enables frontend teams
              to do their best work.
            </p>
          </AboutMe>

          <TechnologiesWrapper>
            <span>WORKS WITH 30+ FRAMEWORKS</span>

            <TechnologiesList></TechnologiesList>
          </TechnologiesWrapper>
        </Content>
      </Container>
    </>
  );
};

export default App;
