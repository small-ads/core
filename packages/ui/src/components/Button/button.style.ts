import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface CustomProps {
  fullWidth?: boolean;
}

export const ButtonStyles = styled.div<CustomProps>`
  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
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
    position: relative;
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
  .xs {
    min-width: auto;
    height: 24px;
    line-height: 22px;
    padding: 0px 8px;
    span {
      width: 16px;
    }
  }
  .sm {
    min-width: 70px;
    height: 32px;
    line-height: 0;
    padding: 8px 12px;
    font-size: 0.875rem;
    span {
      width: 18px;
    }
  }
  .md {
    min-width: auto;
    height: 40px;
    line-height: 38px;
    padding: 0px 24px;
    span {
      width: 20px;
    }
  }
  .lg {
    height: 50px;
    padding: 0px 32px;
    span {
      width: 22px;
    }
  }
  .xs,
  .sm,
  .md,
  .lg {
    span {
      position: absolute;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      inset: 0px auto 0px 22px;
      z-index: 1;
    }
  }
`;
