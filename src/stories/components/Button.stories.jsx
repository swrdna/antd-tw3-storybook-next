import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>

export const Basic = Template.bind({});
Basic.args = {
  type: 'primary',
  size: 'medium',
  loading: false,
  disabled: false,
  block: false,
};
