import { Container } from "./style";
import WhoAmI from "../WhoAmI";
import Projects from "../Projects";
import Contact from "../Contact";

const Main = () => {
  return (
    <Container>
      <WhoAmI />

      <Projects />

      <Contact />
    </Container>
  );
};

export default Main;
