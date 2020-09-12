import React, { useState } from 'react';
import { Main } from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import Modal from './Modal';

export default () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Main style={{ padding: DEFAULT_THEME.space.md }}>
      <Button onClick={() => setModalVisible(true)}>Sign in</Button>
      {isModalVisible && <Modal />}
    </Main>
  );
};
