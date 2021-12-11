import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = (args) => <Card {...args}>This is card content</Card>

export const Basic = Template.bind({});
Basic.args = {
  title: 'This is card',
  size: 'default',
};
