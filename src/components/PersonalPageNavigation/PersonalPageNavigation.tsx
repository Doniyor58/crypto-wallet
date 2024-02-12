import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './PersonalPageNavigation.module.scss';

interface GetClassNamesProps {
  isActive: boolean,
}

type GetClassNames = (props: GetClassNamesProps) => string;

const PersonalPageNavigation = () => {
  const getClassNames: GetClassNames = ({ isActive }) =>
    cn(styles.list__item, isActive && styles.list__item__selected);

  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <NavLink className={getClassNames} to="/wallet">Кошелёк</NavLink>
        <NavLink className={getClassNames} to="/settings">Настройки</NavLink>
      </ul>
    </div>
  );
};

export default React.memo(PersonalPageNavigation);
