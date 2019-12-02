import React from 'react';
import {
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText
} from '@zendeskgarden/react-chrome';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

export default () => (
  <Nav>
    <NavItem className="u-fg-green-400" logo title="Zendesk Product">
      <NavItemIcon>
        <ProductIcon />
      </NavItemIcon>
      <NavItemText>Zendesk Product</NavItemText>
    </NavItem>
    <NavItem current title="Home">
      <NavItemIcon>
        <HomeIcon />
      </NavItemIcon>
      <NavItemText>Home</NavItemText>
    </NavItem>
    <NavItem title="Settings">
      <NavItemIcon>
        <SettingsIcon />
      </NavItemIcon>
      <NavItemText>Settings</NavItemText>
    </NavItem>
    <NavItem brandmark title="Zendesk">
      <NavItemIcon>
        <ZendeskIcon />
      </NavItemIcon>
      <NavItemText>&copy;Zendesk</NavItemText>
    </NavItem>
  </Nav>
);
