import { FieldError, UseFormRegister } from "react-hook-form";
import { Input, Text, Submit, ErrorMessage } from "./style";

import gmailIcon from "../../assets/gmail.svg";
import linkedinIcon from "../../assets/linkedin.svg";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface FormProps {
  register: UseFormRegister<Inputs>;

  errors: {
    name?: FieldError | undefined;
    email?: FieldError | undefined;
    subject?: FieldError | undefined;
    message?: FieldError | undefined;
  };
}

const FormContent = ({ register, errors }: FormProps) => {
  return (
    <>
      <Input
        type='text'
        {...register("name")}
        onChange={(input) => {
          const regex = /[0-9~`!@#$%^&()_={}[\]:;,.<>+\/?-]/g; //eslint-disable-line

          input.target.value = input.target.value.replace(regex, "");
        }}
        placeholder='Nome *'
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Input type='text' {...register("email")} placeholder='Email *' />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Input type='text' {...register("subject")} placeholder='Assunto *' />
      {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}

      <Text rows={7} {...register("message")} placeholder='Mensagem *'></Text>
      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

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
    </>
  );
};

export default FormContent;
