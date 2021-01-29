import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

storiesOf('Button', module)
  .add('primary', () => <Button onClick={() => {}}>Call to Action</Button>)
  .add('primary disabled', () => (
    <Button onClick={() => {}} disabled>
      Call to Action
    </Button>
  ))
  .add('secondary', () => (
    <Button onClick={() => {}} type="secondary">
      Call to Action
    </Button>
  ))
  .add('secondary disabled', () => (
    <Button onClick={() => {}} disabled type="secondary">
      Call to Action
    </Button>
  ))
  .add('onClick handler', () => (
    // eslint-disable-next-line no-alert
    <Button onClick={() => window && window.alert('Button Clicked!')}>
      Click me!
    </Button>
  ))
  .add('styled', () => (
    <Button
      onClick={() => {}}
      style={{
        backgroundColor: 'seagreen',
        borderRadius: '25px',
        minWidth: '180px',
      }}
    >
      Call to Action
    </Button>
  ))
  .add('submit', () => (
    <Button onClick={() => {}} submit>
      Call to Action
    </Button>
  ));
