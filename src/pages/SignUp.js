import React from 'react';
import { Redirect } from 'react-router';
import {
  SignupForm,
  TypeCheckbox,
  DistanceCheckbox,
  LocationCheckbox,
} from '../components';

import { getsCookie } from '../shared/Cookie';

const SignUp = () => {
  const cookie = getsCookie('token');

  if (cookie == '') {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <SignupForm />
      {/* 어떤 환경에서 플로깅하고 싶으세요?
      <TypeCheckbox />
      얼마나 멀리 갈 수 있으신가요? 어디서 주로 활동하시나요?
      <DistanceCheckbox />
      어디서 주로 활동하시나요?
      <LocationCheckbox /> */}
    </React.Fragment>
  );
};

export default SignUp;
