/* eslint-disable react/button-has-type */

import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps, ButtonSizes } from './Button.types';

const Button: FC<ButtonProps> = ({
  type,
  disabled,
  content,
  onClick,
  size = ButtonSizes.s,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={cn(styles.button, styles[`button__${size}`], disabled && styles.button__disabled)}
  >
    {content}
  </button>
);

export default React.memo(Button);
