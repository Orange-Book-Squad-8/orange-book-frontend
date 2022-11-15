import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { api } from '../../lib/axios';
import { login } from '../../redux/reducers';
import { InputField } from '../../components/input-field';
import {
  emailSchema,
  FormContainer,
  FormTitle,
  passwordSchema,
  RegisterContainer,
  SaveButton,
  usernameSchema
} from './index';

interface IFormValues {
  username: string;
  email: string;
  password: string;
  confPassword: string;
}

function Register() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const registerHandler = async (values: IFormValues) => {
    const { username, password, email } = values;

    try {
      const loginResponse = await api.post('/users/create', {
        username,
        email,
        password,
        role: 'user',
        stackCategories: ['BACK_END', 'FRONT_END']
      });

      const user = await api.get(`/users/${loginResponse.data.id}/find`);

      dispatch(login(user.data));

      navigator(-1);
    } catch (e) {
      console.error(e);
    }

    return false;
  };

  const validateForm = async (values: IFormValues) => {
    const { username, email, password, confPassword } = values;
    const errors = {} as IFormValues;

    if (!usernameSchema.isValidSync(username)) {
      errors.username =
        'Nome de usuário deve ter entre 6 e 20 caracteres alpha-numéricos e iniciar com uma letra';

      if (!emailSchema.isValidSync(email)) {
        errors.email = 'Esse e-mail não é válido';
      }

      if (!passwordSchema.isValidSync(password)) {
        errors.password =
          'Senha deve conter entre 6 e 20 caracteres que não sejam espaço em branco';
      }

      if (!passwordSchema.isValidSync(confPassword)) {
        errors.confPassword =
          'Senha deve conter entre 6 e 20 caracteres que não sejam espaço em branco';
      }

      if (password !== confPassword) {
        errors.confPassword = 'As senhas devem ser iguais';
      }

      return errors;
    }
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <FormTitle>Cadastro</FormTitle>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confPassword: ''
          }}
          validate={validateForm}
          onSubmit={registerHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name='username'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='username'
                      title='usuário'
                      type='text'
                    />
                  );
                }}
              </Field>

              <Field name='email'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='email'
                      title='e-mail'
                      type='email'
                    />
                  );
                }}
              </Field>

              <Field name='password'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='password'
                      title='senha'
                      type='password'
                    />
                  );
                }}
              </Field>

              <Field name='confPassword'>
                {({ field, meta }: any) => {
                  return (
                    <InputField
                      field={field}
                      meta={meta}
                      name='confPassword'
                      title='repita a senha'
                      type='password'
                    />
                  );
                }}
              </Field>

              <SaveButton standard disabled={isSubmitting} type='submit'>
                Cadastrar
              </SaveButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </RegisterContainer>
  );
}

export default Register;
