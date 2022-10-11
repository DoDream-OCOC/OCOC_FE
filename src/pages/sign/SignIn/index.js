import React from 'react';
import NavBar from '../../../components/navbar';
import MainContainer from '../../../components/container/main';
import { Text, Button, Empty, Input } from '../../../components/element';

function SignIn() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H4" color="Text-2" content="로그인" />
          <Empty size="2.5rem" />
          <form>
            <Input placeholder="ID" />
            <Empty size="1.5rem" />
            <Input placeholder="비밀번호" />
          </form>
          <Empty size="3rem" />
          <Button content="로그인" />
          <Empty size="1.5rem" />
          <Button content="회원가입" />
        </article>
      </MainContainer>
    </>
  );
}

export default SignIn;
