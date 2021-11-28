/* eslint-disable eqeqeq */
import React from 'react';
import { Redirect } from 'react-router';
import { LoginForm } from '../components';
import { getsCookie } from '../shared/Cookie';

const Login = () => {
  const cookie = getsCookie('token');
  console.log(cookie);
  if (cookie == '') {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
