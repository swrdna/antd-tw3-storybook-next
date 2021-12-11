import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />

export const Basic = Template.bind({});
Basic.args = {
  label: 'This is checkbox',
  labelPosition: 'right',
};
