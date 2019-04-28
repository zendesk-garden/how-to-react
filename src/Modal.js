import React from 'react';
import {
  Modal,
  Header,
  Body,
  Footer,
  FooterItem
} from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import Form from './Form';

export default props => (
  <Modal {...props}>
    <Header>Sign In</Header>
    <Body>...</Body>
    <Footer>
      <FooterItem>
        <Button basic>Cancel</Button>
      </FooterItem>
      <FooterItem>
        <Button primary>Sign in</Button>
      </FooterItem>
    </Footer>
  </Modal>
);
