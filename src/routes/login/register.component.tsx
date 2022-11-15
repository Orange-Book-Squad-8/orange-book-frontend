import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { api } from '../../lib/axios';
import { login } from '../../redux/reducers';
import { InputField } from '../../components/input-field';
import { FormContainer, FormTitle, RegisterContainer, SaveButton } from './index';

interface IFormValues {
  username: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const registerHandler = async (values: IFormValues) => {
    const { username, password } = values;

    try {
      const loginResponse = await api.post('/users/login', {
        username,
        password
      });

      const user = await api.get(`/users/${loginResponse.data.id}/find`);

      dispatch(login(user.data));

      navigator(-1);
    } catch (e) {
      console.error(e);
    }

    return false;
  };


  return (
    <RegisterContainer>
      <FormContainer>
        <FormTitle>Entrar</FormTitle>

        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
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
              <SaveButton standard disabled={isSubmitting} type='submit'>
                Entrar
              </SaveButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </RegisterContainer>
  );
}

export default Login;
