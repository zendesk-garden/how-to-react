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
    <form autoComplete="off" onSubmit={props.onClose}>
      <Header>Sign In</Header>
      <Body>
        <Fields />
      </Body>
      <Footer>
        <FooterItem>
          <Button basic onClick={props.onClose}>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button primary type="submit">
            Sign in
          </Button>
        </FooterItem>
      </Footer>
    </form>
  </Modal>
);
