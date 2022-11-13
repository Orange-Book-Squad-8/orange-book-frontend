import { LoginForm, RegisterContainer } from './register.styles';
import { FormEvent, useState } from 'react';
import { api } from '../../lib/axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigator = useNavigate();

  async function loginEvent(event: FormEvent) {
    event.preventDefault();

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
  }

  return (
    <RegisterContainer>
      <LoginForm onSubmit={loginEvent}>
        <div>Usuario</div>
        <input value={username} onChange={(event) => setUsername(event.target.value)} />
        <div>Senha</div>
        <input value={password} type='password' onChange={(event) => setPassword(event.target.value)} />
        <button>Entrar</button>
      </LoginForm>
    </RegisterContainer>
  );
}

export default Register;
