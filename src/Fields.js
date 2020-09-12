import React from 'react';
import { Checkbox, Field, Label, Input } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export default () => (
  <>
    <Field>
      <Label>Email</Label>
      <Input style={{ marginBottom: DEFAULT_THEME.space.sm }} type="email" />
    </Field>
    <Field>
      <Label>Password</Label>
      <Input style={{ marginBottom: DEFAULT_THEME.space.md }} type="password" />
    </Field>
    <Field>
      <Checkbox>
        <Label>Remember me</Label>
      </Checkbox>
    </Field>
  </>
);
