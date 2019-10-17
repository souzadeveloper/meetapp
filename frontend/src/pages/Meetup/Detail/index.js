import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Description, Time, Location } from './styles';

export default function Detail({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function getMeetup() {
      const response = await api.get(`meetups/${id}`);

      const { title, description, date, location, banner } = response.data;

      const data = {
        id,
        title,
        description,
        date: format(parseISO(date), "dd 'de' MMMM', às' HH'h'", {
          locale: pt,
        }),
        location,
        banner,
      };

      setMeetup(data);
    }

    getMeetup();
  }, [id]);

  function handleEdit() {
    history.push(`/meetups/edit/${id}`);
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);

      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha ao Cancelar o Meetup!');
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <aside>
          <button className="editButton" type="button" onClick={handleEdit}>
            <MdEdit size={20} color="#fff" />
            Editar
          </button>
          <button className="cancelButton" type="button" onClick={handleCancel}>
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </button>
        </aside>
      </header>
      <img src={meetup.banner && meetup.banner.url} alt="Banner" />
      <Description>{meetup.description}</Description>
      <footer>
        <Time>
          <MdEvent size={20} color="#999" />
          <strong>{meetup.date}</strong>
        </Time>
        <Location>
          <MdRoom size={20} color="#999" />
          <strong>{meetup.location}</strong>
        </Location>
      </footer>
    </Container>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
