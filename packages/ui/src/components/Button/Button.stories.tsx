import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import styled from 'styled-components';

type Sizes = ['xs', 'sm', 'md', 'lg'];
const sizes: Sizes = ['xs', 'sm', 'md', 'lg'];

const ButtonsSeparator = styled.div`
  margin-bottom: 16px;
`;

const Template: Story<ButtonProps> = (args) => {
  return (
    <>
      {sizes.map((size) => (
        <ButtonsSeparator key={size}>
          <Button {...args} size={size}>
            Call to action
          </Button>
        </ButtonsSeparator>
      ))}
    </>
  );
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Facebook />,
};

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };

export const Styled = Template.bind({});
Styled.args = {
  icon: <Facebook />,
  style: {
    backgroundColor: 'seagreen',
    borderRadius: '25px',
  },
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked here' } },
} as Meta;
