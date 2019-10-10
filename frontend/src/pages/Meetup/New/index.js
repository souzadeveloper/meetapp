import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import DateTimePicker from '~/Components/DateTimePicker';
import BannerInput from '../BannerInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner: Yup.number().required('A Imagem do Banner é obrigatória'),
  title: Yup.string().required('O Título do Meetup é obrigatório'),
  description: Yup.string().required('A Descrição Completa é obrigatória'),
  date: Yup.date()
    .min(new Date(), 'Não é possível selecionar datas passadas')
    .required('A Data do Meetup é obrigatória')
    .typeError('Informe uma Data válida'),
  location: Yup.string().required('A Localização é obrigatória'),
});

export default function New() {
  async function handleSubmit(data) {
    await api.post('meetups', data);

    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          rows="10"
          placeholder="Descrição Completa"
        />
        <DateTimePicker name="date" placeholder="Data do Meetup" />
        <Input name="location" type="text" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
