import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import Toast from 'react-native-root-toast';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Toast.show('Perfil atualizado com Sucesso!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      hideOnPress: true,
      animation: true,
    });

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Erro!',
      err.response.data.error || 'Erro ao atualizar Perfil!'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
