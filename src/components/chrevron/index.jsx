import { Container } from "./styles";

const Chevron = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Chevron;
