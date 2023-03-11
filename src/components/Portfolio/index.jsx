import projects from "../../database/artstationData.json";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import { ProjectsSectionsContainers, FrameVideo } from "./portfolio.styles";
import SectionContainer from "components/SectionContainer";
import ProjectsSection from "components/ProjectsSection";
import ProjectSlider from "components/ProjectsSlider";

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
          <ProjectSlider projects={projectsIllustrations} />
        </ProjectsSection>

        <Element name="Concepts" />
        <ProjectsSection title="Concepts">
          <ProjectSlider projects={projectsConcepts} />
        </ProjectsSection>

        <Element name="3D" />
        <ProjectsSection title="3D">
          <ProjectSlider projects={projects3D} />
        </ProjectsSection>
      </ProjectsSectionsContainers>

      <ProjectsSection title="Showreel 2022">
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
