import { Container } from "./styles";

const WorkItem = ({ photoUrl, title, description, ...props }) => {
  return (
    <Container {...props}>
      <img src={photoUrl} alt={title} />

      <div className="about">
        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </Container>
  );
};

export default WorkItem;
