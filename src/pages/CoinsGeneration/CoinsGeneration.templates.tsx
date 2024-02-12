import React from 'react';

import { CheckmarkIcon } from '../../assets/icons';
import styles from './CoinsGeneration.module.scss';

export const buttonContent = (
  <span className={styles.button}>
    <span className={styles.button__text}>Выпустить</span>

    <CheckmarkIcon
      height="22"
      width="22"
      color="green"
    />
  </span>
);
