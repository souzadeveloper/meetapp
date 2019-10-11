import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('O E-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('A Nova Senha é obrigatória')
          .min(6, 'A nova Senha deve ter no mínimo 6 dígitos')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('A confirmação da Nova Senha é obrigatório')
          .oneOf([Yup.ref('password')], 'As Senhas não conferem')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form
        initialData={profile}
        onSubmit={handleSubmit}
        schema={schema}
        autoComplete="off"
      >
        <AvatarInput name="avatar_id" />
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Salvar Perfil</button>
      </Form>
    </Container>
  );
}
