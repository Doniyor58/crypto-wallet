/* eslint-disable react/react-in-jsx-scope  */

import { account } from '../../assets/icons';
import styles from './Registration.module.scss';

export const buttonContent = (
  <span className={styles.button}>
    Продолжить
    <img
      alt="entry"
      src={account}
      className={styles.button__logo}
    />
  </span>
);
