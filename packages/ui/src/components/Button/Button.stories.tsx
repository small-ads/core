import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Call to action </Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const XsPrimary = Template.bind({});
XsPrimary.args = { size: 'xs' };

export const SmPrimary = Template.bind({});
SmPrimary.args = { size: 'sm' };

export const LgPrimary = Template.bind({});
LgPrimary.args = { size: 'lg' };

export const XsSecondary = Template.bind({});
XsSecondary.args = { type: 'secondary', size: 'xs' };

export const SmSecondary = Template.bind({});
SmSecondary.args = { type: 'secondary', size: 'sm' };

export const LgSecondary = Template.bind({});
LgSecondary.args = { type: 'secondary', size: 'lg' };

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FacebookSquare size={20} />,
  size: 'lg',
  style: {
    width: '320px',
    backgroundColor: '#1877f2',
    border: '1px solid #1877f2',
    color: 'white',
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };

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
