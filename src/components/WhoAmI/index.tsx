import {
  Container,
  UserSection,
  MyDescription,
  Title,
  Skills,
  Picture,
  IconsArea,
  Icon,
} from "./style";

import css from "../../assets/css.svg";
import figma from "../../assets/figma.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import heroku from "../../assets/heroku.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import linux from "../../assets/linux.svg";
import mysql from "../../assets/mysql.svg";
import node from "../../assets/node.svg";
import postgres from "../../assets/postgres.svg";
import react from "../../assets/react.svg";
import ts from "../../assets/ts.svg";
import vscode from "../../assets/vscode.svg";
import wordpress from "../../assets/wordpress.svg";

const WhoAmI = () => {
  return (
    <Container>
      <UserSection>
        <Title>Quem sou eu?</Title>

        <Picture
          src='https://cdn.discordapp.com/attachments/914144800050143242/942961177837858886/foto_perfil.jpeg'
          alt='Foto de perfil'
        />

        <MyDescription>
          <p>
            Olá, me chamo Eduardo, sou desenvolvedor Full Stack React e Node,
            estudante de Sistemas de Informação e apaixonado por aprender!
          </p>
        </MyDescription>
      </UserSection>

      <Skills>
        <Title>Habilidades</Title>

        <IconsArea>
          <Icon src={html} alt='Skill Icon' />
          <Icon src={css} alt='Skill Icon' />
          <Icon src={js} alt='Skill Icon' />
          <Icon src={ts} alt='Skill Icon' />
          <Icon src={vscode} alt='Skill Icon' />
        </IconsArea>

        <IconsArea>
          <Icon src={react} alt='Skill Icon' />
          <Icon src={node} alt='Skill Icon' />
          <Icon src={wordpress} alt='Skill Icon' />
          <Icon src={git} alt='Skill Icon' />
          <Icon src={github} alt='Skill Icon' />
        </IconsArea>

        <IconsArea>
          <Icon src={figma} alt='Skill Icon' />
          <Icon src={linux} alt='Skill Icon' />
          <Icon src={mysql} alt='Skill Icon' />
          <Icon src={postgres} alt='Skill Icon' />
          <Icon src={heroku} alt='Skill Icon' />
        </IconsArea>
      </Skills>
    </Container>
  );
};

export default WhoAmI;
