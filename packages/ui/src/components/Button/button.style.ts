import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ButtonStyles = styled.div`
  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    max-width: calc(50vw - 36px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    text-decoration: none;
    white-space: nowrap;
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
  .small {
    min-width: auto;
    height: 24px;
    line-height: 22px;
    padding: 0px 10px;
  }
  .medium {
    min-width: 70px;
    height: 32px;
    line-height: 0;
    padding: 6px 12px;
    font-size: 0.875rem;
  }
  .large {
    min-width: auto;
    height: 40px;
    line-height: 38px;
    padding: 0px 25px;
  }
  .block {
    width: 100%;
  }
`;
