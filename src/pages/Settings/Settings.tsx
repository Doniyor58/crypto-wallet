import cn from 'classnames';
import React from 'react';

import { PersonalPageNavigation } from '../../components';
import { useTypedSelector } from '../../hooks';
import { getUserSelector } from '../../redux';
import styles from './Settings.module.scss';

const SettingsPage = () => {
  const { userName, publicKey } = useTypedSelector(getUserSelector);

  return (
    <div className={styles.settings}>
      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.row__text}>Имя кошелька: </span>
          <span className={styles.row__text}>{userName}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.row__text}>Адрес кошелька</span>
          <span className={styles.row__text}>{publicKey}</span>
        </div>

        <div className={cn(styles.row, styles.row__disabled)}>
          <span className={styles.row__text}>Уведомления</span>
          <span className={styles.row__text} />
        </div>

        <div className={cn(styles.row, styles.row__disabled)}>
          <span
            className={styles.row__text}
          >
            Экспортировать приватный ключ
          </span>
          <span className={styles.row__text} />
        </div>

        <div className={cn(styles.row, styles.row__disabled)}>
          <span className={styles.row__text}>Удалить кошелёк</span>
          <span className={styles.row__text} />
        </div>
      </div>

      <PersonalPageNavigation />
    </div>
  );
};

export default React.memo(SettingsPage);
