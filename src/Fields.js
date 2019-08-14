import React from 'react';
import { Checkbox, Field, Label, Input } from '@zendeskgarden/react-forms';

export default () => (
  <>
    <Field className="u-mb-sm">
      <Label>Email</Label>
      <Input type="email" />
    </Field>
    <Field className="u-mb">
      <Label>Password</Label>
      <Input type="password" />
    </Field>
    <Checkbox>
      <Label>Remember me</Label>
    </Checkbox>
  </>
);
