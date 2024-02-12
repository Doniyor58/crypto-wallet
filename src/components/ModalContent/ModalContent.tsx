import React, { useCallback } from 'react';

import { useActions } from '../../hooks';
import { Button } from '../Button';
import styles from './ModalContent.module.scss';

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  const { removeAuthTokens, logoutUser } = useActions();
  const onLogout = useCallback(
    () => {
      logoutUser();
      removeAuthTokens();
      onClose();
    },
    [logoutUser, removeAuthTokens, onClose],
  );

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>Действительно хотите выйти?</h1>
        <h1 className={styles.title}>У нас есть выгодный кредит для вас!</h1>
      </div>

      <div className={styles.row}>
        <Button type="button" onClick={onLogout} content="Выйти" />

        <Button
          type="button"
          onClick={onClose}
          content="Да, хочу ознакомиться с кредитом"
        />
      </div>
    </div>
  );
};

export default React.memo(ModalContent);
