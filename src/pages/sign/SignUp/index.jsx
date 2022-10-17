import React from 'react';
import { useSignUp } from './useSignUp';

import NavBar from '../../../components/navbar';
import MainContainer from '../../../components/container/main';
import { Text, Button, Empty, Input } from '../../../components/element';

const SIGN_UP = 'sign-up';

function SignUp() {
  const { reg, onSubmit, vldError } = useSignUp();

  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H4" color="Text-2" content="회원가입" />
          <Empty size="2.5rem" />
          <form id={SIGN_UP} onSubmit={onSubmit}>
            <Input {...reg.email} vldError={vldError.email} type="email" placeholder="Email" />
            <Empty size="2rem" />
            <Input {...reg.password} vldError={vldError.password} type="password" placeholder="비밀번호" />
            <Empty size="2rem" />
            <Input {...reg.confirmPassword} vldError={vldError.confirmPassword} type="password" placeholder="비밀번호 재입력" />
          </form>
          <Empty size="6rem" />
          <Button content="회원가입" type="submit" form={SIGN_UP} />
        </article>
      </MainContainer>
    </>
  );
}

export default SignUp;
