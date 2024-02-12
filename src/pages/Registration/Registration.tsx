import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Form } from '../../components';
import { ROUT } from '../../router';
import {
  REGISTRATION_FORM_INITIAL_VALUE,
  REGISTRATION_FORM_INPUTS,
} from './Registration.constants';
import { RegistrationValidationSchema } from './Registration.dto';
import { useRegistration } from './Registration.hook';
import styles from './Registration.module.scss';

const RegistrationPage = () => {
  const {
    REGISTRATION_FORM_BUTTON,
    errorMessage,
    isLoading,
    onSubmit,
  } = useRegistration();

  return (
    <div className={styles.registration}>
      <h1 className={styles.title}>Заполните анкету</h1>

      <Form
        inputs={REGISTRATION_FORM_INPUTS}
        button={REGISTRATION_FORM_BUTTON}
        initialValues={REGISTRATION_FORM_INITIAL_VALUE}
        validationSchema={RegistrationValidationSchema}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />

      <div className={cn(
        styles.auth,
        isLoading && styles.auth__disable,
      )}
      >
        <span>Уже зарегистрированы?</span>
        <NavLink
          to={ROUT.AUTH}
          className={styles.auth__link}
        >
          Войти
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(RegistrationPage);
