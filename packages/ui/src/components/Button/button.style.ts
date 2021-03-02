import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ButtonStyles = styled.div`
  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap');

  button {
    height: 40px;
    width: 140px;
    min-width: auto;
    max-width: calc(50vw - 36px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    line-height: 38px;
    white-space: nowrap;
    padding: 0px 25px;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.2s ease 0s;
  }
  .primary {
    color: ${colors.white};
    background-color: ${colors.primary};
    &:hover {
      color: ${colors.primary};
      border: 1px solid ${colors.primary};
      background-color: ${colors.white};
    }
    &:disabled {
      background-color: ${colors.accents1};
      border-color: ${colors.accents2};
      color: ${colors.accents3};
    }
  }
  .secondary {
    box-sizing: border-box;
    color: ${colors.secondary};
    border: 1px solid ${colors.accents2};
    background-color: ${colors.white};
    &:hover,
    &:active {
      color: ${colors.primary};
      background-color: ${colors.white};
      border: 1px solid ${colors.primary};
    }
  }
`;
