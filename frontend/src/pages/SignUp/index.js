import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('O E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A Senha deve ter no mínimo 6 dígitos')
    .required('A Senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />
        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
