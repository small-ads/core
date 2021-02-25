import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
storiesOf('Button', module)
    .add('primary', () => React.createElement(Button, { onClick: () => { } }, "Call to Action"))
    .add('primary disabled', () => (React.createElement(Button, { onClick: () => { }, disabled: true }, "Call to Action")))
    .add('secondary', () => (React.createElement(Button, { onClick: () => { }, type: "secondary" }, "Call to Action")))
    .add('secondary disabled', () => (React.createElement(Button, { onClick: () => { }, disabled: true, type: "secondary" }, "Call to Action")))
    .add('onClick handler', () => (
// eslint-disable-next-line no-alert
React.createElement(Button, { onClick: () => window && window.alert('Button Clicked!') }, "Click me!")))
    .add('styled', () => (React.createElement(Button, { onClick: () => { }, style: {
        backgroundColor: 'seagreen',
        borderRadius: '25px',
        minWidth: '180px',
    } }, "Call to Action")))
    .add('submit', () => (React.createElement(Button, { onClick: () => { }, submit: true }, "Call to Action")));
