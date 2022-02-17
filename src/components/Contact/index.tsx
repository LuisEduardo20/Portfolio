import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Title, Form } from "./style";
import FormContent from "../Form";

toast.configure();

let scheme = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email().required("O email é obrigatório"),
  subject: yup.string().required("O assunto é obrigatório"),
  message: yup.string().required("A mensagem é obritagória"),
});

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
  } = useForm<Inputs>({ resolver: yupResolver(scheme) });

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

  const onSubmit = handleSubmit((data, e) => sendEmail(data, e));

  return (
    <Container id='contato'>
      <Title>Contato</Title>

      <Form onSubmit={onSubmit}>
        <FormContent register={register} errors={errors} />
      </Form>
    </Container>
  );
};

export default Contact;
