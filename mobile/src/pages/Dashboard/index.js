import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, Alert } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import Toast from 'react-native-root-toast';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Meetup from '~/Components/Meetup';
import Header from '~/Components/Header';
import Background from '~/Components/Background';

import { Container, List, SelectDateContainer, SelectedDate } from './styles';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const loadMeetups = useCallback(async () => {
    const response = await api.get('meetups', {
      params: { date, page },
    });

    const { docs, ...docsInfo } = response.data;

    setMeetups(docs);
    setPagination(docsInfo);
  }, [date, page]);

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused, loadMeetups]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
  }

  function handleLoadMore() {
    if (page === pagination.pages) return;

    setPage(page + 1);
  }

  async function handleSubscription(id) {
    try {
      await api.post(`/subscriptions/${id}`);

      Toast.show('Inscrição realizada com Sucesso!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        hideOnPress: true,
        animation: true,
      });
    } catch (err) {
      Alert.alert('Falha!', err.response.data.error);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <SelectDateContainer>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="keyboard-arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <SelectedDate>{dateFormatted}</SelectedDate>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="keyboard-arrow-right" size={30} color="#fff" />
          </TouchableOpacity>
        </SelectDateContainer>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <Meetup
              handle={() => handleSubscription(item.id)}
              data={item}
              type="meetups"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
