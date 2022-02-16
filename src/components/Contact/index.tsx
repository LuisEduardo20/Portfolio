import { Container, Title, Form, Input, Text, Submit } from "./style";

import gmailIcon from "../../assets/gmail.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <Container id='contato'>
      <Title>Contato</Title>

      <Form>
        <Input type='text' placeholder='Nome' />

        <Input type='text' placeholder='Email' />

        <Input type='text' placeholder='Assunto' />

        <Text rows={7} placeholder='Texto'></Text>

        <Submit>
          Enviar
          <img src={gmailIcon} alt='Ícone do Gmail' />
        </Submit>

        <a
          href='https://www.linkedin.com/in/luis-eduardo-santos-costa-5369841b3/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedinIcon} alt='Ícone do Linkedin' />
        </a>
      </Form>
    </Container>
  );
};

export default Contact;
