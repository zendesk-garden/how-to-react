import React from 'react';
import {
  TextField,
  Label as InputLabel,
  Input
} from '@zendeskgarden/react-textfields';
import {
  Checkbox,
  Label as CheckboxLabel
} from '@zendeskgarden/react-checkboxes';

export default () => (
  <>
    <TextField className="u-mb-sm">
      <InputLabel>Email</InputLabel>
      <Input type="email" />
    </TextField>
    <TextField className="u-mb">
      <InputLabel>Password</InputLabel>
      <Input type="password" />
    </TextField>
    <Checkbox>
      <CheckboxLabel>Remember me</CheckboxLabel>
    </Checkbox>
  </>
);
