import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WorkItem from "../components/workItem";

import { Container, Content, WorksWrapper } from "../styles/pages/works.js";

const Works = () => {
  return (
    <>
      <Head>
        <title>Trabalhos</title>
      </Head>

      <Navbar />

      <Container>
        <Content>
          <h1>Trabalhos</h1>

          <WorksWrapper>
            <WorkItem
              photoUrl="./assets/gplus.png"
              title="Gplus Marketplace"
              description="Marketplace que une todos os restaurantes em um unico lugar."
              href="https://app.gplustogo.com.br/"
              target="_blank"
            />
            <WorkItem
              photoUrl="./assets/tcc.png"
              title="Choconaty's"
              description="Projeto de TCC, cárdapio online para uma doceria."
              href="https://www.choconatys.com/"
              target="_blank"
            />
          </WorksWrapper>
        </Content>

        <Content style={{ marginTop: "2rem", marginBottom: "20rem" }}>
          <h1>Colaborações</h1>

          <WorksWrapper>
            <p>Nenhuma colaboração ainda</p>
          </WorksWrapper>
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default Works;
