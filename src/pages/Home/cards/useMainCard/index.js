import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { gameSlice } from '../../../../store/slices';
import { study, question } from '../../../../apis/index';

export const useMainCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: async () => {
      // [Todo] 잘 되는지 확인 필요
      await study.postStudy().then(async res => {
        dispatch(gameSlice.actions.setStudyId(res.data.data));
        await question.getQuestion(res.data.data.studyId, 1).then(res => dispatch(gameSlice.actions.setAllCorpus(res.data)));
      });
    },
    onSuccess: () => navigate('/play-game'),
    // [Todo] alert 붙여주기
    onError: err => console.log(err),
  });

  const letsPlayGame = () => mutation.mutate();

  return { letsPlayGame };
};
