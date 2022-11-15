import * as yup from 'yup';

const schemaRegex = {
  username: /^[a-zA-Z][a-zA-Z0-9]{5,19}$/,
  password: /^\S{6,20}$/
};

export const usernameSchema = yup
  .string()
  .required()
  .matches(schemaRegex.username);

export const emailSchema = yup.string().required().email();

export const passwordSchema = yup
  .string()
  .required()
  .matches(schemaRegex.password);
