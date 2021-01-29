import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ButtonStyles = styled.div`
  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }
  button {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    font-weight: 400;
    line-height: 1.9rem;
    transition: background-color ease 0.2s;
    height: 50px;
    min-width: 200px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
    padding: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .primary {
    color: ${colors.white};
    background-color: ${colors.primary};
    border: 0;
    i {
      font-size: 1.5em;
    }
    &:hover {
      top: -4px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
      background-color: ${colors.active};
    }
    &:active {
      background-color: ${colors.active};
    }
    &:disabled {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
      background-color: ${colors.divider};
    }
  }
  .secondary {
    box-sizing: border-box;
    color: ${colors.white};
    border: 1px solid ${colors.primary};
    background-color: ${colors.primary};
    i {
      font-size: 1.4em;
    }
    &:hover,
    &:active {
      color: ${colors.primary};
      background-color: ${colors.white};
      border: 1px solid ${colors.primary};
    }
    &:disabled {
      color: ${colors.white};
      background-color: ${colors.secondary};
      border: 1px solid ${colors.secondary};
    }
  }
`;
