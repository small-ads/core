import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Call to action</Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const MediumPrimary = Template.bind({});
MediumPrimary.args = { size: 'medium' };

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { size: 'small' };

export const MediumSecondary = Template.bind({});
MediumSecondary.args = { type: 'secondary', size: 'medium' };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { type: 'secondary', size: 'small' };

export const Facebook = Template.bind({});
Facebook.args = { social: 'facebook' };

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
