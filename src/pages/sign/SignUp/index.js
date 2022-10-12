import React from 'react';
import NavBar from '../../../components/navbar';
import MainContainer from '../../../components/container/main';
import { Text, Button, Empty, Input } from '../../../components/element';

function SignUp() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H4" color="Text-2" content="회원가입" />
          <Empty size="2.5rem" />
          <form>
            <Input placeholder="Email" />
            <Empty size="2rem" />
            <Input placeholder="비밀번호" />
            <Empty size="2rem" />
            <Input placeholder="비밀번호 재입력" />
          </form>
          <Empty size="6rem" />
          <Button content="회원가입" />
        </article>
      </MainContainer>
    </>
  );
}

export default SignUp;
