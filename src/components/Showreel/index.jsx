import SectionContainer from "components/SectionContainer";
import { Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrameVideo } from "./Showreel.styles";

const Showrell = () => {
  return (
    <SectionContainer icon={""} title={"Showreel 2022"}>
      <Element name="showreel" />
      <FrameVideo
        src="https://www.youtube-nocookie.com/embed/dJFyk6KcYVE"
        title="Showreel 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></FrameVideo>
    </SectionContainer>
  );
};

export default Showrell;
