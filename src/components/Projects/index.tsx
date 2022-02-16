import ProjectCard from "../ProjectCard";
import { Container, Title, ProjectsSlider } from "./style";
import { repositories } from "../../repository";

const Projects = () => {
  const showProjects = repositories.map(
    ({ name, imgUrl, description, repositoryLink, applicationLink }, index) => {
      return (
        <ProjectCard
          title={name}
          imgUrl={imgUrl}
          description={description}
          repositoryLink={repositoryLink}
          applicationLink={applicationLink}
          key={`Projeto ${index + 1}`}
        />
      );
    }
  );

  return (
    <Container id='projetos'>
      <Title>Projetos</Title>

      <ProjectsSlider>{showProjects}</ProjectsSlider>
    </Container>
  );
};

export default Projects;
