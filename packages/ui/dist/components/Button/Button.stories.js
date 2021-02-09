"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@storybook/react");
var _1 = require(".");
react_2.storiesOf('Button', module)
    .add('primary', function () { return <_1.Button onClick={function () { }}>Call to Action</_1.Button>; })
    .add('primary disabled', function () { return (<_1.Button onClick={function () { }} disabled>
      Call to Action
    </_1.Button>); })
    .add('secondary', function () { return (<_1.Button onClick={function () { }} type="secondary">
      Call to Action
    </_1.Button>); })
    .add('secondary disabled', function () { return (<_1.Button onClick={function () { }} disabled type="secondary">
      Call to Action
    </_1.Button>); })
    .add('onClick handler', function () { return (
// eslint-disable-next-line no-alert
<_1.Button onClick={function () { return window && window.alert('Button Clicked!'); }}>
      Click me!
    </_1.Button>); })
    .add('styled', function () { return (<_1.Button onClick={function () { }} style={{
    backgroundColor: 'seagreen',
    borderRadius: '25px',
    minWidth: '180px'
}}>
      Call to Action
    </_1.Button>); })
    .add('submit', function () { return (<_1.Button onClick={function () { }} submit>
      Call to Action
    </_1.Button>); });
