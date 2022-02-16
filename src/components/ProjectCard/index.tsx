import {
  Container,
  Title,
  Img,
  Description,
  LinksContainer,
  Link,
} from "./style";

interface CardProps {
  title: string;
  imgUrl: string;
  description: string;
  repositoryLink: string;
  applicationLink: string;
}

const ProjectCard = ({
  title,
  imgUrl,
  description,
  repositoryLink,
  applicationLink,
}: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Img src={imgUrl} alt='Imagem do projeto' />

      <Description>{description}</Description>

      <LinksContainer>
        {repositoryLink ? (
          <Link href={repositoryLink} target='_blank'>
            Repositório
          </Link>
        ) : (
          ""
        )}

        <Link href={applicationLink} target='_blank'>
          Link da aplicação
        </Link>
      </LinksContainer>
    </Container>
  );
};

export default ProjectCard;
