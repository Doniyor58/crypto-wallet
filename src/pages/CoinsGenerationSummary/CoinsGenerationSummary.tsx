import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { solana } from '../../assets/icons';
import { Button } from '../../components';
import { LOCAL_STORAGE_GENERATED_COINS_COUNT_KEY } from '../../constants';
import { ROUT } from '../../router';
import { LocaleStorageFacade } from '../../utils';
import styles from '../TransferSummary/TransferSummary.module.scss';

const CoinsGenerationSummaryPage = () => {
  const navigate = useNavigate();
  const generatedCoins = LocaleStorageFacade.get(LOCAL_STORAGE_GENERATED_COINS_COUNT_KEY) ?? '';

  const onBackClick = useCallback(() => navigate(ROUT.WALLET), [navigate]);

  useEffect(() => {
    if (!generatedCoins) navigate(ROUT.WALLET);
  }, [generatedCoins, navigate]);

  useEffect(() => () => {
    LocaleStorageFacade.remove(LOCAL_STORAGE_GENERATED_COINS_COUNT_KEY);
  }, []);

  return (
    <div className={styles.summary}>
      <h1 className={styles.title}>SOL выпущены</h1>

      <img className={styles.logo} src={solana} alt="solana logo" />

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.row__text}>Количество: </span>
          <span className={styles.row__text}>{`${generatedCoins} SOL`}</span>
        </div>
      </div>

      <Button onClick={onBackClick} type="button" content="Закрыть" />

    </div>
  );
};

export default React.memo(CoinsGenerationSummaryPage);
