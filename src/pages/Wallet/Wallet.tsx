import cn from 'classnames';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { exchange, forward, solana } from '../../assets/icons';
import {
  Button,
  ButtonSizes,
  Loader,
  PersonalPageNavigation,
} from '../../components';
import { LoaderSize } from '../../components/Loader/Loader';
import { useActions, useTypedSelector } from '../../hooks';
import { getApplicationSelector, getUserSelector } from '../../redux';
import { ROUT } from '../../router';
import styles from './Wallet.module.scss';

const WalletPage = () => {
  const navigate = useNavigate();
  const { coins, isAdmin } = useTypedSelector(getUserSelector);
  const { isLoading } = useTypedSelector(getApplicationSelector);
  const { getWallets } = useActions();

  const onTransferPageRedirect = () => navigate(ROUT.TRANSFER);
  const onGenerateCoinsPageRedirect = () => navigate(ROUT.COINS_GENERATION);

  const actionsClasses = cn(styles.actions, isAdmin && styles.actions__row);

  useEffect(() => {
    getWallets();
  }, []);

  if (isLoading) {
    return <Loader size={LoaderSize.l} />;
  }

  return (
    <div className={styles.wallet}>
      <h1 className={styles.title}>
        {`Баланс кошелька: ${coins}`}
      </h1>

      <div className={actionsClasses}>
        <div className={styles.action}>
          <Button
            type="button"
            onClick={onTransferPageRedirect}
            size={ButtonSizes.m}
            content={(
              <div className={styles.action__content}>
                <span className={styles.action__title}>Отправить</span>
                <img src={forward} alt="transfer icon" />
              </div>
            )}
          />
        </div>

        {isAdmin && (
          <div className={styles.action}>
            <Button
              type="button"
              onClick={onGenerateCoinsPageRedirect}
              size={ButtonSizes.m}
              content={(
                <div className={styles.action__content}>
                  <span className={styles.action__title}>Выпустить</span>
                  <img src={exchange} alt="generate icon" />
                </div>
              )}
            />
          </div>
        )}
      </div>

      <div className={styles.coins}>
        <button
          type="button"
          onClick={onTransferPageRedirect}
          className={styles.solana}
        >
          <img src={solana} alt="solana" className={styles.solana__logo} />
          <span className={styles.solana__name}>Solana</span>
          <span className={styles.solana__qty}>{`${coins} SOL`}</span>
        </button>
      </div>

      <PersonalPageNavigation />
    </div>
  );
};

export default React.memo(WalletPage);
