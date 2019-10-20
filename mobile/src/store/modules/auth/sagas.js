import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import Toast from 'react-native-root-toast';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Erro!', err.response.data.error || 'Falha na Autenticação!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    Toast.show('Conta criada com Sucesso!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      hideOnPress: true,
      animation: true,
    });

    NavigationService.navigate('SignIn');
  } catch (err) {
    Alert.alert(
      'Erro!',
      err.response.data.error || 'Falha ao criar nova Conta!'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
