import React from 'react';
import { GridStyles } from './grid.style';
import { GridProps } from './types';

export function Grid({
  colsMinW = '0',
  colsMaxW = '1fr',
  autoRowsMinW = 'auto',
  autoRowsMaxW = 'auto',
  gap = '0px',
  children,
  style = {},
  alignContent = 'normal',
  justifyContent = 'normal',
  repeatColsPattern = 'auto-fill',
  repeatRowsPattern = 'auto-fill',
}: GridProps) {
  return (
    <GridStyles
      colsMinW={colsMinW}
      colsMaxW={colsMaxW}
      justifyContent={justifyContent}
      alignContent={alignContent}
      repeatColsPattern={repeatColsPattern}
      repeatRowsPattern={repeatRowsPattern}
      autoRowsMinW={autoRowsMinW}
      autoRowsMaxW={autoRowsMaxW}
      gap={gap}
      style={style}
    >
      {children}
    </GridStyles>
  );
}
