import styled from 'styled-components';
import { GridProps } from './types';

export const GridStyles = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap};
  grid-template-columns: repeat(
    ${({ repeatColsPattern }) => repeatColsPattern},
    minmax(${({ colsMinW }) => colsMinW}, ${({ colsMaxW }) => colsMaxW})
  );
  grid-auto-rows: minmax(
    ${({ autoRowsMinW }) => autoRowsMinW},
    ${({ autoRowsMaxW }) => autoRowsMaxW}
  );
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
`;
