/* eslint-disable react/react-in-jsx-scope  */

import { account, entry } from '../../assets/icons';
import styles from './Auth.module.scss';

export const buttonContent = (
  <span className={styles.button}>
    Войти
    <img
      alt="entry"
      src={entry}
      className={styles.button__logo}
    />
  </span>
);

export const registrationContent = (
  <span className={styles.button}>
    Зарегистрироваться
    <img
      alt="registration"
      src={account}
      className={styles.button__logo}
    />
  </span>
);
