import { ProjectsSectionContainer } from "./ProjectsSection.styles";
const ProjectsSection = ({ children, title }) => {
  return (
    <ProjectsSectionContainer>
      <h2>{title}</h2>
      <div className="line"></div>
      {children}
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
