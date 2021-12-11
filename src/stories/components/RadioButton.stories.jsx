import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Form/RadioButton',
  component: RadioButton,
}

const Template = (args) => <RadioButton {...args} />

export const Basic = Template.bind({});
Basic.args = {
  label: 'This is radio',
  labelPosition: 'right',
};
