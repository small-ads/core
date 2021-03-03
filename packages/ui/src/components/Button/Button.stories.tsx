import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Call to action</Button>
);

// 👇Each story then reuses that template
export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Primary.args = { type: 'secondary' };

export const Styled = Template.bind({});
Styled.args = {
  style: {
    backgroundColor: 'seagreen',
    borderRadius: '25px',
    minWidth: '180px',
  },
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked here' } },
} as Meta;
