import { Container } from "./styles";

const Button = ({ children, theme = "light", ...props }) => {
  return (
    <Container theme={theme} {...props}>
      {children}
    </Container>
  );
};

export default Button;
