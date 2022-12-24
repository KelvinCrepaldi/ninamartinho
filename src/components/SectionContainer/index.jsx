import { Container } from "./SectionContainer.styles";
const SectionContainer = ({ children }) => {
  return (
    <Container>
      <div className="background-blur"></div>
      {children}
    </Container>
  );
};

export default SectionContainer;
