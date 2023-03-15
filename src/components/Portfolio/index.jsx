import projects from "../../database/artstationData.json";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import { ProjectsSectionsContainers, FrameVideo } from "./portfolio.styles";
import SectionContainer from "components/SectionContainer";
import SectionBox from "components/SectionBox";
import ProjectSlider from "components/ProjectsSlider";

import Muscadine from "components/Muscadine";

const Portfolio = () => {
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
      {" "}
      <Element name="portfolio" />
      <SectionBox title="Showreel 2022">
        <Element name="showreel" />
        <FrameVideo
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dJFyk6KcYVE"
          title="Showreel 2022"
          frameborder="0"
          allowFullScreen
        ></FrameVideo>
      </SectionBox>
      <ProjectsSectionsContainers>
        <Element name="Illustrations" />
        <SectionBox title="Illustrations">
          <ProjectSlider projects={projectsIllustrations} />
        </SectionBox>

        <Element name="Concepts" />
        <SectionBox title="Concepts">
          <ProjectSlider projects={projectsConcepts} />
        </SectionBox>

        <Element name="3D" />
        <SectionBox title="3D">
          <ProjectSlider projects={projects3D} />
        </SectionBox>
      </ProjectsSectionsContainers>
      <Element name="muscadine" />
      <Muscadine />
    </SectionContainer>
  );
};

export default Portfolio;
