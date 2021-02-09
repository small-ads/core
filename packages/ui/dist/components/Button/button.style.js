"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonStyles = void 0;
var styled_components_1 = require("styled-components");
var colors_1 = require("../../constants/colors");
exports.ButtonStyles = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  button:disabled,\n  button:disabled .component-child {\n    cursor: not-allowed !important;\n  }\n  button {\n    font-size: 1.6rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    cursor: pointer;\n    font-weight: 400;\n    line-height: 1.9rem;\n    transition: background-color ease 0.2s;\n    height: 50px;\n    min-width: 200px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;\n    padding: 0;\n    border-radius: 5px;\n    text-decoration: none;\n  }\n  .primary {\n    color: ", ";\n    background-color: ", ";\n    border: 0;\n    i {\n      font-size: 1.5em;\n    }\n    &:hover {\n      top: -4px;\n      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n    &:disabled {\n      box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;\n      background-color: ", ";\n    }\n  }\n  .secondary {\n    box-sizing: border-box;\n    color: ", ";\n    border: 1px solid ", ";\n    background-color: ", ";\n    i {\n      font-size: 1.4em;\n    }\n    &:hover,\n    &:active {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n    &:disabled {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n  }\n"], ["\n  button:disabled,\n  button:disabled .component-child {\n    cursor: not-allowed !important;\n  }\n  button {\n    font-size: 1.6rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    cursor: pointer;\n    font-weight: 400;\n    line-height: 1.9rem;\n    transition: background-color ease 0.2s;\n    height: 50px;\n    min-width: 200px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;\n    padding: 0;\n    border-radius: 5px;\n    text-decoration: none;\n  }\n  .primary {\n    color: ", ";\n    background-color: ", ";\n    border: 0;\n    i {\n      font-size: 1.5em;\n    }\n    &:hover {\n      top: -4px;\n      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n    &:disabled {\n      box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;\n      background-color: ", ";\n    }\n  }\n  .secondary {\n    box-sizing: border-box;\n    color: ", ";\n    border: 1px solid ", ";\n    background-color: ", ";\n    i {\n      font-size: 1.4em;\n    }\n    &:hover,\n    &:active {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n    &:disabled {\n      color: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n    }\n  }\n"])), colors_1.colors.white, colors_1.colors.primary, colors_1.colors.active, colors_1.colors.active, colors_1.colors.divider, colors_1.colors.white, colors_1.colors.primary, colors_1.colors.primary, colors_1.colors.primary, colors_1.colors.white, colors_1.colors.primary, colors_1.colors.white, colors_1.colors.secondary, colors_1.colors.secondary);
var templateObject_1;
