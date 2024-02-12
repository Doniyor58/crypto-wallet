import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, ButtonSizes, Form } from '../../components';
import { ROUT } from '../../router';
import { AUTH_FORM_INITIAL_VALUE, AUTH_FORM_INPUTS } from './Auth.constants';
import { AuthFormValidationSchema } from './Auth.dto';
import { useAuth } from './Auth.hook';
import styles from './Auth.module.scss';
import { registrationContent } from './Auth.templates';

const AuthPage = () => {
  const {
    AUTH_FORM_BUTTON,
    errorMessage,
    isLoading,
    onSubmit,
  } = useAuth();

  return (
    <div className={styles.auth}>
      <h1 className={styles.title}>{'Добро пожаловать в\nМаркетплейс!'}</h1>

      <Form
        inputs={AUTH_FORM_INPUTS}
        button={AUTH_FORM_BUTTON}
        initialValues={AUTH_FORM_INITIAL_VALUE}
        validationSchema={AuthFormValidationSchema}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />

      <div className={styles.choice}>
        ––––––––-– ИЛИ –––––––––-
      </div>

      <NavLink to={ROUT.REGISTRATION}>
        <Button
          type="button"
          size={ButtonSizes.l}
          disabled={isLoading}
          content={registrationContent}
        />
      </NavLink>
    </div>
  );
};

export default React.memo(AuthPage);
