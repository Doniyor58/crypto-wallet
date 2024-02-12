import { SchemaOf } from 'yup';

export interface FormProps {
  inputs: FormInput[];
  button: FormButton;
  initialValues: FormState;
  onSubmit: (formState: FormState) => void;

  allowBackLink?: boolean
  errorMessage?: string;
  validationSchema?: SchemaOf<FormState>;
  validate?: (formState: FormState) => FormErrors;
}

export interface FormInput {
  name: string;
  placeholder?: string;
  /**
   * Текст, отображаемый радом с элементом формы
   */
  label?: string;
  type: FormInputType;
  initialValue?: FormValue;
}

export interface FormButton {
  type: FormButtonTypes;
  content: string | JSX.Element | React.ReactNode;
  onSubmit: (formValue: FormState) => void;

  disabled?: boolean;
}

export enum FormButtonTypes {
  submit = 'submit',
  button = 'button',
  reset = 'reset',
}

export interface FormState {
  [key: string]: string | number | boolean | null | undefined;
}

export type FormValue = string | number | boolean;

export interface FormErrors {
  [key: string]: string;
}

export enum InputTypeEnum {
  text = 'text',
  number = 'number',
  password = 'password',
}

export type FormInputType = InputTypeEnum;
