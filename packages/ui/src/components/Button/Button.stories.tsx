import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>
    Call to action to see what happens when we have a very, very long text as
    the text of our buttons, buttons, buttons
  </Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { size: 'small' };

export const MediumSmPrimary = Template.bind({});
MediumSmPrimary.args = { size: 'medium-sm' };

export const LargePrimary = Template.bind({});
LargePrimary.args = { size: 'large' };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { type: 'secondary', size: 'small' };

export const MediumSmSecondary = Template.bind({});
MediumSmSecondary.args = { type: 'secondary', size: 'medium-sm' };

export const LargeSecondary = Template.bind({});
LargeSecondary.args = { type: 'secondary', size: 'large' };

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FacebookSquare size={20} />,
  size: 'large',
  style: {
    backgroundColor: '#1877f2',
    border: '1px solid #1877f2',
    color: 'white',
  },
  fullWidth: true,
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
