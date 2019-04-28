import React from 'react';
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';

export default () => (
  <Chrome>
    <Nav />
    <Body>
      <Header />
      <Content>
        <Main />
      </Content>
    </Body>
  </Chrome>
);
