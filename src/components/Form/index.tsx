import React from "react";
import { Input, Text, Submit } from "./style";

import gmailIcon from "../../assets/gmail.svg";
import linkedinIcon from "../../assets/linkedin.svg";

interface FormProps {
  register: any;
  errors: any;
}

const FormContent = ({ register, errors }: FormProps) => {
  return (
    <>
      {errors.name && <span>O nome é obrigatório</span>}
      <Input
        type='text'
        {...register("name", { required: true })}
        placeholder='Nome *'
      />

      {errors.email && <span>O email é obrigatório</span>}
      <Input
        type='text'
        {...register("email", {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        id='email'
        placeholder='Email *'
      />

      {errors.subject && <span>Assunto é obrigatório</span>}
      <Input
        type='text'
        {...register("subject", { required: true })}
        placeholder='Assunto *'
      />

      {errors.message && <span>A mensagem é obrigatório</span>}
      <Text
        rows={7}
        {...register("message", { required: true })}
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
    </>
  );
};

export default FormContent;
