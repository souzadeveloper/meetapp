import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizations');

      const data = response.data.map(meetup => {
        return {
          id: meetup.id,
          title: meetup.title,
          date: format(parseISO(meetup.date), "dd 'de' MMMM', às 'HH'hs'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNew() {
    history.push('/meetups/new');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNew}>
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </button>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <aside>
              <strong>{meetup.date}</strong>
              <Link to={`/meetups/detail/${meetup.id}`}>
                <MdChevronRight size={20} color="#fff" />
              </Link>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
