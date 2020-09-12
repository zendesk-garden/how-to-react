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
      <Header>Sign In</Header>
      <Body>...</Body>
      <Footer>
        <FooterItem>
          <Button isBasic>Cancel</Button>
        </FooterItem>
        <FooterItem>
          <Button isPrimary type="submit">
            Sign in
          </Button>
        </FooterItem>
      </Footer>
    </form>
  </Modal>
);
