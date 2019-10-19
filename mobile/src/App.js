import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';
import Orientation from 'react-native-orientation-locker';

import createRouter from './routes';

YellowBox.ignoreWarnings(['Warning:']);

Orientation.lockToPortrait();

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
