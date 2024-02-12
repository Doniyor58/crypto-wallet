import React, { FC } from 'react';

import styles from './Loader.module.scss';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

interface LoaderProps {
  size: LoaderSize
}

const Loader: FC<LoaderProps> = ({ size = 'm' }) => (
  <div className={styles.loader}>
    <div className={styles.ring}>
      <div className={styles[size]} />
      <div className={styles[size]} />
      <div className={styles[size]} />
      <div className={styles[size]} />
    </div>
  </div>
);

export default React.memo(Loader);
