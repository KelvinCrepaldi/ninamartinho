import { Card, Overlay } from "./ProjectCardImage.styles";

const ProjectCardImage = ({ project }) => {
  const { id, title, album, page_url, img_url, description, small_img_url } =
    project;

  return (
    <Card key={id}>
      <a href={page_url} rel="noopener" target="_blank">
        <img src={small_img_url} />
        <Overlay>
          <span>{title}</span>
        </Overlay>
      </a>
    </Card>
  );
};
export default ProjectCardImage;
