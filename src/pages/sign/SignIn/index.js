import React from 'react';
import NavBar from '../../../components/navbar';
import MainContainer from '../../../components/container/main';
import { Text, Button } from '../../../components/element';

function SignIn() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <article>
          <Text size="H4" color="Text-2" content="로그인" />
          {/* [Todo] Input 컴포넌트 만들기 */}
        </article>
      </MainContainer>
    </>
  );
}

export default SignIn;
