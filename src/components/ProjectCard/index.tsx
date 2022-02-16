import {
  Container,
  Title,
  Img,
  Description,
  LinksContainer,
  Link,
} from "./style";

import githubIcon from "../../assets/github.svg";
import navigationIcon from "../../assets/navigation.svg";

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

      <a href={applicationLink} target='_blank' rel='noreferrer'>
        <Img src={imgUrl} alt='Imagem do projeto' />
      </a>

      <Description>{description}</Description>

      <LinksContainer>
        {repositoryLink ? (
          <Link href={repositoryLink} target='_blank'>
            Visite o repositório
            <img src={githubIcon} alt='Ícone do GitHub' />
          </Link>
        ) : (
          ""
        )}

        <Link href={applicationLink} target='_blank'>
          Visite a aplicação
          <img src={navigationIcon} alt='Ícone de redirecionamento' />
        </Link>
      </LinksContainer>
    </Container>
  );
};

export default ProjectCard;
