import { createSlice } from '@reduxjs/toolkit';
import { gameInitialState } from '../initialStates';

export const gameSlice = createSlice({
  name: 'gameSlice',

  initialState: gameInitialState,
  // [Todo] 이름 및 기능 수정 필요합니다~
  reducers: {
    setStudyId(state, action) {
      state.studyId = action.payload.studyId;
    },
    setAllCorpus(state, action) {
      state.datasets = action.payload.data;
    },
    increaseStage(state, action) {
      state.stage++;
    },
    cleanAllCorpus(state, action) {
      state.datasets = gameSlice.getInitialState().datasets;
      state.results = gameSlice.getInitialState().results;
      state.studyId = gameSlice.getInitialState().studyId;
      state.stage = gameSlice.getInitialState().stage;
      state.correctAnswerCount = gameSlice.getInitialState().correctAnswerCount;
    },
    setStudyResult(state, action) {
      state.results = [...state.results, action.payload.results];
    },
    // 도중에 데이터가 날아갔을때는?
    // [Todo] studyResult.answerList.length에 따라서 progress bar랑 로그인 유도 페이지
  },
});
