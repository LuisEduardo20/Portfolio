import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Title, Form } from "./style";
import FormContent from "../Form";

toast.configure();

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

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

  const sendEmail = (data: any, e: any) => {
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
      )
      .catch((e) => {
        errorNotification();
      });

    reset();
  };

  const onSubmit = handleSubmit((data, e) => {
    sendEmail(data, e);
  });

  return (
    <Container id='contato'>
      <Title>Contato</Title>

      {/*TODO Fazer verificações de input  */}
      {/*TODO Estilizar mensagem de requerido  */}

      <Form onSubmit={onSubmit}>
        <FormContent register={register} errors={errors} />
      </Form>
    </Container>
  );
};

export default Contact;
