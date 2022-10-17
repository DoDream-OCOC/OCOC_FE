import React from 'react';
import { useSignIn } from './useSignIn';

import NavBar from '../../../components/navbar';
import MainContainer from '../../../components/container/main';
import { Text, Button, Empty, Input } from '../../../components/element';

const SIGN_IN = 'sign-in';

function SignIn() {
  const { navigate, reg, onSubmit, vldError } = useSignIn();

  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H4" color="Text-2" content="로그인" />
          <Empty size="2.5rem" />
          <form id={SIGN_IN} onSubmit={onSubmit}>
            <Input {...reg.email} vldError={vldError.email} type="email" placeholder="Email" />
            <Empty size="1.5rem" />
            <Input {...reg.password} vldError={vldError.password} type="password" placeholder="비밀번호" />
          </form>
          <Empty size="3rem" />
          <Button content="로그인" type="submit" form={SIGN_IN} />
          <Empty size="1.5rem" />
          <Button content="회원가입" onClick={() => navigate('/sign-up')} />
        </article>
      </MainContainer>
    </>
  );
}

export default SignIn;
