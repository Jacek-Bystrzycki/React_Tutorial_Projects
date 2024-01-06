type Colors = {
  readonly primary: string;
};

export const colors: Colors = {
  primary: '#645cff',
};

//==============

type BorderProps = {
  width?: string;
  type?: string;
  color?: string;
};

export const setupBorder = ({ width = '1px', type = 'solid', color = 'black' }: BorderProps): string => {
  return `${width} ${type} ${color}`;
};
