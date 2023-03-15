import {
  MuscadineContent,
  MuscadineBackground,
  DownloadLink,
  MuscadineTitleContent,
  MuscadineDownloadContent,
} from "./muscadine.styles";

import backgroundimage from "../../assets/muscadineBackground.jpg";
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
        <MuscadineDownloadContent>
          <DownloadLink
            href="https://drive.google.com/file/d/1ZS1AFFZw918X9yq8Vbx5AU_Qs8f7V57i/view?usp=share_link"
            target="_blank"
          >
            Download Game<span>1,3G</span>
          </DownloadLink>
          <span>
            Go to{" "}
            <a
              href="https://sites.google.com/view/muscadinewiki/refs-mechanics"
              target="_blank"
            >
              Muscadine wiki...
            </a>
          </span>
        </MuscadineDownloadContent>
      </MuscadineContent>
    </div>
  );
};

export default Muscadine;
