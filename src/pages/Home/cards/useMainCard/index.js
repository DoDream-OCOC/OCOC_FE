import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { gameSlice } from '../../../../store/slices';
import { study } from '../../../../apis/index';
import { setQuestions } from '../../../../utils/setQuestions';
import { isSigned } from '../../../../utils/isSigned';
import React from 'react';

// [Todo] 버튼을 눌렀을 때 요청하는 로직이 맞을까? 페이지 접근시 요청하는 로직이 맞을까?
export const useMainCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: async () => {
      await study.postStudy().then(async res => {
        dispatch(gameSlice.actions.setStudyId(res.data.data));
        await setQuestions(res.data.data.studyId, 1);
      });
    },
    onSuccess: () => navigate('/play-game'),
  });

  const letsPlayGame = () => mutation.mutate();
  const goToSignInPage = () => navigate('/sign-in');

  React.useLayoutEffect(() => {
    isSigned() && navigate('/my-page');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { letsPlayGame, goToSignInPage };
};
