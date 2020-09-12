import React from 'react';
import {
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText
} from '@zendeskgarden/react-chrome';
import {
  Dropdown,
  Menu,
  Item,
  Separator,
  Trigger
} from '@zendeskgarden/react-dropdowns';
import { ReactComponent as MenuIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';

export default () => (
  <Header>
    <Dropdown>
      <Trigger>
        <HeaderItem>
          <HeaderItemIcon>
            <MenuIcon />
          </HeaderItemIcon>
          <HeaderItemText isClipped>Products</HeaderItemText>
        </HeaderItem>
      </Trigger>
      <Menu>
        <Item value="item-one">One</Item>
        <Item value="item-two">Two</Item>
        <Item value="item-three">Three</Item>
        <Separator />
        <Item value="item-signout">Sign out</Item>
      </Menu>
    </Dropdown>
  </Header>
);
