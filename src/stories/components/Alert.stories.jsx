import React from 'react';
import Alert from './Alert';

export default {
  title: 'Component/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />

export const Basic = Template.bind({});
Basic.args = {
  type: 'success',
  message: 'This is alert',
};
