import React, { useState } from 'react';
import { Main } from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import Modal from './Modal';

export default () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Main className="u-p">
      <Button>Sign in</Button>
      {isModalVisible && <Modal />}
    </Main>
  );
};
