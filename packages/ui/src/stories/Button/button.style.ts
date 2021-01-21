import styled from "styled-components";

const Colors = {
  primary: "#0071f3",
  secondary: "#ACB1B6",
  active: "#0366d6",
  activeLight: "#5da2f0",
  textPrimary: "#031323",
  divider: "#D9DCDE",
  blackPearl: "#59636e",
  primaryDim: "#FBF7FE",

  destructive: "#E63644",
  affirmative: "#189F59",
  warning: "#D97508",
  white: "#FFFFFF",
  destructiveDim: "#FFE1E1",
  affirmativeDim: "#E8F5E5",
  warningDim: "#FFF6D1",
  textInactive: "#BFBFBF",
  background: "#F2F3F4",
};

const ButtonStyles = styled.div`
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
    color: ${Colors.white};
    background-color: ${Colors.primary};
    border: 0;
    i {
      font-size: 1.5em;
    }
    &:hover {
      top: -4px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
      background-color: ${Colors.active};
    }
    &:active {
      background-color: ${Colors.active};
    }
    &:disabled {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
      background-color: ${Colors.divider};
    }
  }
  .secondary {
    box-sizing: border-box;
    color: ${Colors.white};
    border: 1px solid ${Colors.primary};
    background-color: ${Colors.primary};
    i {
      font-size: 1.4em;
    }
    &:hover,
    &:active {
      color: ${Colors.primary};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.primary};
    }
    &:disabled {
      color: ${Colors.white};
      background-color: ${Colors.secondary};
      border: 1px solid ${Colors.secondary};
    }
  }
`;

export default ButtonStyles;
