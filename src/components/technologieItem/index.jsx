import { Container } from "./styles";

const TechnologieItem = ({ name, photoUrl }) => {
  return (
    <Container>
      <img src={photoUrl} alt={name} />
      
      <p>{name}</p>
    </Container>
  );
}

export default TechnologieItem;