import { ProjectsSectionContainer } from "./ProjectsSection.styles";
const SectionBox = ({ children, title }) => {
  return (
    <ProjectsSectionContainer>
      <h2>{title}</h2>
      <div className="line"></div>
      {children}
    </ProjectsSectionContainer>
  );
};

export default SectionBox;
