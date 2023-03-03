import projects from "../../database/artstationData.json";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import {
  ProjectsSectionsContainers,
  ProjectsMap,
  FrameVideo,
} from "./portfolio.styles";
import SectionContainer from "components/SectionContainer";
import ProjectsSection from "components/ProjectsSection";
import ProjectCard from "components/ProjectCard";
import Muscadine from "components/Muscadine";

const Portfolio = ({}) => {
  const projectsConcepts = projects.filter(
    (project) => project.album === "Concept"
  );

  const projectsIllustrations = projects.filter(
    (project) => project.album === "Illustrations"
  );

  const projects3D = projects.filter((project) => project.album === "3D");

  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
      title="Portfolio"
    >
      <Element name="portfolio" />
      <ProjectsSectionsContainers>
        <Element name="Illustrations" />
        <ProjectsSection title="Illustrations">
          <ProjectsMap>
            {projectsIllustrations.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </ProjectsMap>
        </ProjectsSection>

        <Element name="Concepts" />
        <ProjectsSection title="Concepts">
          <ProjectsMap>
            {projectsConcepts.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </ProjectsMap>
        </ProjectsSection>

        <Element name="3D" />
        <ProjectsSection title="3D">
          <ProjectsMap>
            {projects3D.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </ProjectsMap>
        </ProjectsSection>
      </ProjectsSectionsContainers>
      <ProjectsSection
        title="Showreel 2022
"
      >
        <Element name="showreel" />
        <FrameVideo
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dJFyk6KcYVE"
          title="Showreel 2022"
          frameborder="0"
          allowFullScreen
        ></FrameVideo>
      </ProjectsSection>

      <ProjectsSection title="Muscadine Game">
        <Element name="muscadine" />
        <Muscadine />
      </ProjectsSection>
    </SectionContainer>
  );
};

export default Portfolio;
