import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardLogin from '../../components/card-login/cardLogin.components';
import { fetchLoginRequest } from '../../store/auth/actions';
import { getErrorSelector, getPendingSelector } from '../../store/auth/selectors';
import { useHistory } from 'react-router-dom';
import AlertCustom from '../../components/alert/alert.component';
import Spinner from '../../components/spinner/spinner';

function LoginPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);

  const handleEmailValue = (value: string) => {
    setEmail(value);
  };

  const handlePasswordValue = (value: string) => {
    setPassword(value);
  };

  const login = () => {
    dispatch(fetchLoginRequest({ email, password }, history));
  };

  return (
    <div className="app-container">
      <CardLogin
        handleEmailValue={handleEmailValue}
        handlePasswordValue={handlePasswordValue}
        login={login}
      ></CardLogin>
      {pending && <Spinner />}
      {error && <AlertCustom message={error} />}
    </div>
  );
}

export default LoginPage;
