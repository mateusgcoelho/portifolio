import Head from "next/head";
import { useRouter } from "next/router";

import { useState } from "react";

import Button from "../components/button";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import TechnologieItem from "../components/technologieItem";
import Footer from "../components/footer";

import {
  Container,
  Content,
  Background,
  AboutWrapper,
  AboutContent,
  UserInfo,
  Technologies,
  ContentUserInfo,
} from "../styles/pages/index.js";

const App = () => {
  const router = useRouter();

  const [technologies, setTechnologies] = useState([
    {
      name: "JavaScript",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Node.js",
      photoUrl: "https://www.feedstock.com.br/site/static/img/node.png",
    },
    {
      name: "React Ecosystem",
      photoUrl:
        "http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png",
    },
    {
      name: "Next.js",
      photoUrl:
        "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    },
    {
      name: "Angular",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    },
    {
      name: "PostgreSQL",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "MongoDB",
      photoUrl: "https://img.icons8.com/color/452/mongodb.png",
    },
    {
      name: "Flutter",
      photoUrl:
        "https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png",
    },
    {
      name: "TypeScript",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "Java",
      photoUrl:
        "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png",
    },
    {
      name: "Php",
      photoUrl: "https://logowik.com/content/uploads/images/php.jpg",
    },
    {
      name: "Docker",
      photoUrl:
        "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/vertical-logo-monochromatic.png?itok=erja9lKc",
    },
  ]);

  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Navbar />

      <Container>
        <Content>
          <AboutWrapper>
            {/* <Background>
              <video autoPlay loop muted>
                <source src={"./assets/backgroundVideo.mp4"} type="video/mp4" />
              </video>

              <img src="./assets/splash.png" alt="Splash Background" />
            </Background> */}

            <AboutContent>
              <h1>
                Não é a linguagem <br />
                que define o programador,
                <br /> mas sim sua lógica.
              </h1>
            </AboutContent>
          </AboutWrapper>

          <UserInfo>
            <Profile />

            <ContentUserInfo>
              <h2>Bio</h2>

              <p>
                &nbsp; Meu nome é João Mateus mas pode me chamar de Mateus,
                tenho 17 anos. Minha historia começa quando eu era ainda uma
                criança, apaixonada por jogos e fascinada pelo simples fato de
                um computador conseguir me proporcionar tudo aquilo de
                divertimento e ao mesmo tempo ser tao complexo, e foi assim que
                começou minha jornada na programação, tentando reproduzir tudo
                aquilo que eu via em jogos, que na epoca meu favorito era
                Minecraft.
              </p>
            </ContentUserInfo>

            <ContentUserInfo>
              <h2>Carreira</h2>

              <ul>
                <li>
                  <b>2020 - 2021</b> GPlus Sistemas - [Estágiario Dev.
                  FullStack]
                </li>
                <li>
                  <b>2022</b> Kabum! - [Dev. Junior FullStack]
                </li>
              </ul>
            </ContentUserInfo>

            <ContentUserInfo>
              <h2>Formações</h2>

              <ul>
                <li>
                  <b>2020 - 2020</b> GoStack 13.0 - Rocketseat [FullStack
                  Bootcamp]
                </li>
                <li>
                  <b>2020 - 2021</b> UNICAMP - Colégio Técnico de Limeira
                </li>
              </ul>
            </ContentUserInfo>

            <ContentUserInfo>
              <h2>Contato</h2>

              <ul>
                <li>
                  <b>Linkedin</b> /mateusgcoelho
                </li>
                <li>
                  <b>Telefone</b> +55 19 98422-6276
                </li>
              </ul>

              <Button onClick={() => router.push("/works")}>
                Ver Trabalhos
              </Button>
            </ContentUserInfo>
          </UserInfo>
        </Content>

        <Content
          style={{
            maxWidth: "100vw",
            marginTop: "7rem",
            padding: 10,
            background: "#F2F3FA",
          }}
        >
          <Technologies>
            <h2>Algumas tecnologias:</h2>

            {technologies.map(({ name, photoUrl }) => (
              <TechnologieItem key={name} name={name} photoUrl={photoUrl} />
            ))}
          </Technologies>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default App;
