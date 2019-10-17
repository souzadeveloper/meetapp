import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import Toast from 'react-native-root-toast';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Meetup from '~/Components/Meetup';
import Background from '~/Components/Background';
import Header from '~/Components/Header';

import { Container, List } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    try {
      await api.delete(`/subscriptions/${id}`);

      setSubscriptions(subscriptions.filter(s => s.id !== id));

      Toast.show('Inscrição Cancelada com Sucesso!', {
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
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              handle={() => handleCancel(item.id)}
              data={item.meetup}
              type="subscriptions"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
