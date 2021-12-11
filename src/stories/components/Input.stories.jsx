import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />

export const Basic = Template.bind({});
Basic.args = {
  size: 'middle',
  placeholder: 'This is input',
};
