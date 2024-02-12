import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { account } from '../../assets/icons';
import { Button } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { getUserSelector } from '../../redux';
import { ROUT } from '../../router';
import styles from './CreateWallet.module.scss';

const CreateWalletPage = () => {
  const navigate = useNavigate();
  const { coins, publicKey } = useTypedSelector(getUserSelector);
  const { createWallet } = useActions();

  useEffect(() => {
    if (coins && publicKey) {
      navigate(ROUT.WALLET);
    }
  }, [coins, publicKey, navigate]);

  const createButtonContent = (
    <span className={styles.button}>
      <span className={styles.button__text}>Создать кошелёк</span>
      <img src={account} alt="create icon" />
    </span>
  );

  const connectButtonContent = (
    <span className={styles.button}>
      <span className={styles.button__text}>Подключить кошелёк</span>
      <img src={account} alt="create icon" />
    </span>
  );

  return (
    <div className={styles.createWallet}>
      <div className={styles.description}>
        <h1 className={styles.title}>У Вас ещё нет криптокошелька.</h1>
        <h1 className={styles.title}>
          Для начала работы необходимо его
          создать
        </h1>
      </div>

      <div className={styles.buttons}>
        <Button
          type="button"
          onClick={() => createWallet()}
          content={createButtonContent}
        />

        <Button type="button" disabled content={connectButtonContent} />
      </div>
    </div>
  );
};

export default React.memo(CreateWalletPage);
