import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';
import Orientation from 'react-native-orientation-locker';

import createRouter from './routes';
import NavigationService from '~/services/navigation';

YellowBox.ignoreWarnings(['Warning:']);

Orientation.lockToPortrait();

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const registerService = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  const Routes = createRouter(signed);

  return <Routes ref={registerService} />;
}
