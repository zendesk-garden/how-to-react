import React from 'react';
import { Checkbox, Field, Label, Input } from '@zendeskgarden/react-forms';

export default () => (
  <>
    <Field>
      <Label>Email</Label>
      <Input className="u-mb-sm" type="email" />
    </Field>
    <Field>
      <Label>Password</Label>
      <Input className="u-mb" type="password" />
    </Field>
    <Field>
      <Checkbox>
        <Label>Remember me</Label>
      </Checkbox>
    </Field>
  </>
);
