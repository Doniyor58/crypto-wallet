import { ReactNode } from 'react';

export enum ButtonSizes {
  s = 's',
  m = 'm',
  l = 'l',
}

export interface ButtonProps {
  type: 'submit' | 'button';
  content: string | ReactNode | JSX.Element;

  size?: ButtonSizes;
  disabled?: boolean;
  onClick?: (e: unknown) => void;
}
