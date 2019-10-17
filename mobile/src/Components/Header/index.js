import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image style={{ width: 23, height: 24 }} source={logo} />
    </Container>
  );
}
