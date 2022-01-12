import Link from "next/link";

import { Wrapper, Navigation, Routes, LinkRoute, GithubLogo } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Navigation>
        <div className="user-info">
          <Link href="/">
            <a className="ignite" style={{ fontWeight: "bold" }}>
              MTCOELHO.DEV
            </a>
          </Link>

          <Routes>
            <Link href="/">
              <LinkRoute>Início</LinkRoute>
            </Link>

            <Link href="/works">
              <LinkRoute>Trabalhos</LinkRoute>
            </Link>
          </Routes>
        </div>

        <GithubLogo href="https://github.com/mateusgcoelho" target="_blank">
          <img src={"./assets/githublogo.png"} alt="Github Logo" />
        </GithubLogo>
      </Navigation>
    </Wrapper>
  );
};

export default Navbar;
