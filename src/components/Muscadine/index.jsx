import {
  MuscadineContent,
  MuscadineBackground,
  DownloadLink,
  MuscadineTitleContent,
  MuscadineDownloadContent,
  MuscadineVideo,
} from "./muscadine.styles";

import backgroundimage from "../../assets/muscadineBackground.jpg";
import { FrameVideo } from "components/Portfolio/portfolio.styles";
const Muscadine = ({}) => {
  return (
    <div>
      <MuscadineContent backgroundimage={backgroundimage}>
        <div className="border1" />
        <div className="border2" />
        <MuscadineTitleContent>
          <h1>MUSCADINE 2022</h1>
          <p>
            Berry, a small rat-woman creature works in delivery services and
            uncovers mysteries across an old witch's kitchen.
          </p>
        </MuscadineTitleContent>
        <MuscadineVideo
                    src="https://www.youtube.com/embed/wiQ59Elt7OE"
                    title="Showreel 2022"
                    frameborder="0"
                    allowFullScreen
       ></MuscadineVideo>
      </MuscadineContent>
    </div>
  );
};

export default Muscadine;
