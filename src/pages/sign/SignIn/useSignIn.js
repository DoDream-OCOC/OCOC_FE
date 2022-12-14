import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { sign } from '../../../apis';
import { useAlert, useLoading } from '../../../hooks';
import { isEmail, isRequired } from '../../../utils/validation';
import { createVldErr } from '../../../utils/validityError';
import { isSigned } from '../../../utils/isSigned';

const EMAIL = 'email';
const PW = 'password';

export const useSignIn = () => {
  const navigate = useNavigate();
  const { Alert, openAlert } = useAlert();
  const { Loading } = useLoading();
  const mutation = useMutation({
    mutationFn: data => sign.postLoginData(data),
    onSuccess: () => navigate('/my-page'),
    onError: err => openAlert('Error', err),
  });
  const tmpLoading = () => <Loading isLoading={mutation.isLoading} />;
  const { register, handleSubmit, formState } = useForm({ defaultValues: { email: '', password: '' } });

  const reg = {
    email: { ...register(EMAIL, { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' }) },
    password: { ...register(PW, { validate: { isRequired: val => isRequired(val) || '비밀번호를 입력해야 합니다.' } }) },
  };

  const onSubmit = handleSubmit(async data => mutation.mutate({ loginId: data.email, loginPassword: data.password }));

  const vldErr = createVldErr(formState, [EMAIL, PW]);

  React.useEffect(() => {
    if (isSigned()) navigate('/my-page');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { navigate, reg, onSubmit, vldErr, Alert, Loading: tmpLoading };
};
