import { Container, Content } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Content>
        <a href="#">MTC.DEV</a>

        <div className="menu">
          <div className="rect"></div>
          <div className="rect"></div>
        </div>
      </Content>
    </Container>
  );
};

export default Navbar;
