import emailjs from "emailjs-com";
import { Container, Title, Form, Input, Text, Submit } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gmailIcon from "../../assets/gmail.svg";
import linkedinIcon from "../../assets/linkedin.svg";

toast.configure();

const Contact = () => {
  const successNotification = () => {
    toast.success("Email enviado com sucesso!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const errorNotification = () => {
    toast.error("Ops, o email não pode ser enviado!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          successNotification();
        },
        (error) => {
          errorNotification();
        }
      );
    e.target.reset();
  };

  return (
    <Container id='contato'>
      <Title>Contato</Title>

      <Form onSubmit={sendEmail}>
        <Input type='text' name='name' id='name' placeholder='Nome' />

        <Input type='text' name='email' id='email' placeholder='Email' />

        <Input type='text' name='subject' id='subject' placeholder='Assunto' />

        <Text
          rows={7}
          name='message'
          id='message'
          placeholder='Mensagem'
        ></Text>

        <Submit type='submit'>
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
