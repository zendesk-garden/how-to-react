import React from 'react';
import {
  Modal,
  Header,
  Body,
  Footer,
  FooterItem
} from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import Fields from './Fields';

export default (props) => (
  <Modal {...props}>
    <form autoComplete="off">
      <Header>Sign in</Header>
      <Body>...</Body>
      <Footer>...</Footer>
    </form>
  </Modal>
);
