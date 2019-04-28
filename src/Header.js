import React from 'react';
import {
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText
} from '@zendeskgarden/react-chrome';
import { Menu, Item, Separator } from '@zendeskgarden/react-menus';
import { ReactComponent as MenuIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';

export default () => (
  <Header>
    <Menu
      trigger={({ ref }) => (
        <HeaderItem innerRef={ref}>
          <HeaderItemIcon>
            <MenuIcon />
          </HeaderItemIcon>
          <HeaderItemText clipped>Products</HeaderItemText>
        </HeaderItem>
      )}
    >
      <Item key="item-one">One</Item>
      <Item key="item-two">Two</Item>
      <Item key="item-three">Three</Item>
      <Separator />
      <Item key="item-signout">Sign out</Item>
    </Menu>
  </Header>
);
