import { Container, Content, HeaderLink } from "./style";

const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderLink href='#quem-sou-eu'>Quem sou eu?</HeaderLink>
        <HeaderLink href='#projetos'>Projetos</HeaderLink>
        <HeaderLink href='#contato'>Contato</HeaderLink>
      </Content>
    </Container>
  );
};

export default Header;
