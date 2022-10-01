import { createSlice } from '@reduxjs/toolkit';
import { studyInitialState } from '../initialStates';

export const studySlice = createSlice({
  name: 'studySlice',

  initialState: studyInitialState,
  reducers: {
    setAllCorpus(state, action) {
      state.datasets = action.payload.datasets;
      state.studyId = action.payload.studyId;
    },
    increaseStage(state, action) {
      state.stage++;
    },
    cleanAllCorpus(state, action) {
      state.datasets = studySlice.getInitialState().datasets;
      state.results = studySlice.getInitialState().results;
      state.studyId = studySlice.getInitialState().studyId;
      state.stage = studySlice.getInitialState().stage;
      state.correctAnswerCount = studySlice.getInitialState().correctAnswerCount;
    },
    setStudyResult(state, action) {
      state.results = [...state.results, action.payload.results];
      console.log(state.results);
    },
    // 도중에 데이터가 날아갔을때는?
    // [Todo] studyResult.answerList.length에 따라서 progress bar랑 로그인 유도 페이지
  },
});
