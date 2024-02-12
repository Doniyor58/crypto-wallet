import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { solana } from '../../assets/icons';
import { Button } from '../../components';
import {
  LOCAL_STORAGE_RECEIVE_PUBLIC_KEY,
  LOCAL_STORAGE_TRANSFER_AMOUNT_KEY,
} from '../../constants';
import { ROUT } from '../../router';
import { LocaleStorageFacade } from '../../utils';
import styles from './TransferSummary.module.scss';

const TransferSummaryPage = () => {
  const navigate = useNavigate();

  const coins: string = LocaleStorageFacade.get(LOCAL_STORAGE_TRANSFER_AMOUNT_KEY) ?? '';
  const receivePublicKey: string = LocaleStorageFacade.get(LOCAL_STORAGE_RECEIVE_PUBLIC_KEY) ?? '';

  const onBackClick = useCallback(() => navigate(ROUT.WALLET), [navigate]);

  useEffect(() => {
    if (!coins || !receivePublicKey) navigate(ROUT.WALLET);
  }, [coins, receivePublicKey, navigate]);

  useEffect(() => () => {
    LocaleStorageFacade.remove(LOCAL_STORAGE_TRANSFER_AMOUNT_KEY);
    LocaleStorageFacade.remove(LOCAL_STORAGE_RECEIVE_PUBLIC_KEY);
  }, []);

  return (
    <div className={styles.summary}>
      <h1 className={styles.title}>SOL отправлены</h1>

      <img className={styles.logo} src={solana} alt="solana logo" />

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.row__text}>Адрес получателя: </span>
          <span className={styles.row__text}>{receivePublicKey}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.row__text}>Количество: </span>
          <span className={styles.row__text}>{`${coins} SOL`}</span>
        </div>
      </div>

      <Button onClick={onBackClick} type="button" content="Закрыть" />

    </div>
  );
};

export default React.memo(TransferSummaryPage);
