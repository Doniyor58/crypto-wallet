import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CancelIcon } from '../../assets/icons';
import { Button, ButtonSizes } from '../Button';
import styles from './Form.module.scss';
import { FormProps } from './Form.types';

const Form: FC<FormProps> = ({
  inputs,
  initialValues,
  errorMessage,
  onSubmit,
  button,
  validate,
  allowBackLink = false,
  validationSchema,
}) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    validationSchema,
    validateOnMount: true,
  });

  const cancelButton = (
    <span className={styles.button}>
      <span className={styles.button__text}>Отмена</span>
      <CancelIcon width="18" height="13" color="#0094ff" />
    </span>
  );

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        {inputs.map(({
          name, label, type, placeholder,
        }) => (
          <div
            key={name}
            className={styles.form__row}
          >
            <label
              htmlFor={name}
              className={styles.form__row__label}
            >
              {label && label}
            </label>

            <input
              id={name}
              name={name}
              type={type}
              step=".0000000000000001"
              placeholder={placeholder}
              onChange={formik.handleChange}
              className={styles.form__row__input}
            />
          </div>
        ))}
      </div>

      <div className={styles.error}>
        {errorMessage && errorMessage}
      </div>

      {allowBackLink ? (
        <div className={styles.buttons}>
          <Button
            size={ButtonSizes.l}
            type="button"
            content={cancelButton}
            onClick={() => navigate(-1)}
          />

          <Button
            type="submit"
            size={ButtonSizes.l}
            disabled={!formik.isValid || button.disabled}
            content={button.content}
          />
        </div>
      )
        : (
          <Button
            type="submit"
            size={ButtonSizes.l}
            disabled={!formik.isValid || button.disabled}
            content={button.content}
          />
        )}
    </form>
  );
};

export default React.memo(Form);
