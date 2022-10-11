import React from 'react';
import { Button } from '../../../components/element';

// [Todo] 기존 Button을 상속받아서 사용할 수 있는 방법이 없나
export const SignBtn = ({ isDisabled = false, isLoading = false, content, ...props }) => {
  return <Button isDisabled={isDisabled} isLoading={isLoading} content={content} {...props} />;
};
