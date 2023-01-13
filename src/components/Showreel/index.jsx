import SectionContainer from "components/SectionContainer";
import { Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrameVideo } from "./Showreel.styles";

const Showrell = () => {
  return (
    <SectionContainer icon={""} title={"Showreel 2022"}>
      <Element name="showreel" />
      <FrameVideo
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dJFyk6KcYVE"
        title="Showreel 2022"
        frameborder="0"
        allowFullScreen
      ></FrameVideo>
    </SectionContainer>
  );
};

export default Showrell;
