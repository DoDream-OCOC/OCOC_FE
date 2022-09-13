import { createSlice } from '@reduxjs/toolkit';
import { studyInitialState } from '../initialStates';

export const studySlice = createSlice({
  name: 'studySlice',

  initialState: studyInitialState,
  reducers: {
    setAllCorpus(state, action) {
      state.wordsObj = action.payload.wordsObj;
    },
    increaseStage(state, action) {
      state.stage++;
    },
    cleanAllCorpus(state, action) {
      state.wordsObj = studySlice.getInitialState().wordsObj;
      state.stage = studySlice.getInitialState().stage;
      state.studyResult = studySlice.getInitialState().studyResult;
    },
    setStudyResult(state, action) {
      state.studyResult.answerList = [...state.studyResult.answerList, ...action.payload.answerList];
      state.studyResult.answerList.correct && state.studyResult.answer++;
    },
    // 도중에 데이터가 날아갔을때는?
    // [Todo] studyResult.answerList.length에 따라서 progress bar랑 로그인 유도 페이지
  },
});
