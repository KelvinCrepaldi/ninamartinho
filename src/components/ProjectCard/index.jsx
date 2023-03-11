import { ProjectCardContainer, ProjectCardImg } from "./ProjectCard.styles";
const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <a href={project.page_url} target="_blank">
        <ProjectCardImg src={project.img_url}></ProjectCardImg>
        <div className="box1"></div>
        <div className="box2"></div>

        <h3>{project.title}</h3>
      </a>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
