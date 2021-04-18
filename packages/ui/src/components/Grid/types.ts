type SpaceDistribution =
  | 'start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'end'
  | 'left'
  | 'right'
  | 'normal';

type RepeatPattern = 'auto-fill' | 'auto-fit' | number;

export interface GridProps {
  colsMinW?: string;
  colsMaxW?: string;
  autoRowsMinW?: string;
  autoRowsMaxW?: string;
  repeatColsPattern?: RepeatPattern;
  repeatRowsPattern?: RepeatPattern;
  gap?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  justifyContent?: SpaceDistribution;
  alignContent?: SpaceDistribution;
}
