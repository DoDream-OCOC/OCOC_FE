import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signSlice } from '../../../store/slices/sign';
import { sign } from '../../../apis';
import { isEmail, isRequired } from '../../../utils/validation';
import { isVldErr } from '../../../utils/validityError';

export const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutaion = useMutation({
    mutationFn: data =>
      // [Todo] 확인해보기
      sign.postLoginData(data).then(res => console.log(res)),
    // sign.postLoginData(data).then(res => dispatch(signSlice.actions.setToken({ X_AUTH_ACCESS_TOKEN: res.data.X_AUTH_ACCESS_TOKEN, X_AUTH_REFRESH_TOKEN: res.data.X_AUTH_REFRESH_TOKEN })));
    // [Todo] 확인해보기 -> 뒤로가기
    onSuccess: () => navigate(-1),
  });
  const { register, handleSubmit, formState } = useForm({ defaultValues: { email: '', password: '' } });

  const reg = {
    email: { ...register('email', { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' }) },
    password: { ...register('password', { validate: { isRequired: val => isRequired(val) || '비밀번호를 입력해야 합니다.' } }) },
  };

  const onSubmit = handleSubmit(async data => mutaion.mutate({ loginId: data.email, loginPassword: data.password }));

  const vldErr = {
    email: { isError: isVldErr(formState, 'email'), errMsg: formState.errors?.email?.message },
    password: { isError: isVldErr(formState, 'password'), errMsg: formState.errors?.password?.message },
  };

  return { navigate, reg, onSubmit, vldErr };
};
