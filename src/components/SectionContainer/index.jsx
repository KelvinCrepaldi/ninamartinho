import { Container } from "./SectionContainer.styles";
const SectionContainer = ({ children, icon, title }) => {
  return (
    <Container className="first-not-margin">
      <div className="container-title ">
        {icon && <span>{icon}</span>}
        {title && <h1>{title}.exe</h1>}
      </div>
      <div className="container-content">{children}</div>
    </Container>
  );
};

export default SectionContainer;
