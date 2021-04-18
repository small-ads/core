import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid } from '.';
import styled from 'styled-components';
import { GridProps } from './types';

const Box = styled.div`
  background-color: mistyrose;
`;

const Template: Story<GridProps> = (args) => {
  return (
    <Grid {...args}>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
        <Box>{num}</Box>
      ))}
    </Grid>
  );
};

export const GeneralGrid300px = Template.bind({});
GeneralGrid300px.args = {
  colsMinW: '300px',
  autoRowsMinW: '300px',
  gap: '10px',
};

export const Grid3columns = Template.bind({});
Grid3columns.args = {
  colsMinW: '30%',
  gap: '10px',
  style: {
    width: '900px',
  },
};

export const Grid12columns = Template.bind({});
Grid12columns.args = {
  repeatColsPattern: 12,
  gap: '10px',
};

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;
