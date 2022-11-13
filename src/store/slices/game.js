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
    setInitCorpus(state, action) {
      state.datasets = action.payload.data;
      state.life = 3;
      state.stage++;
    },
    setExtraCorpus(state, action) {
      state.datasets = [...state.datasets, ...action.payload.data];
    },
    increaseStage(state, _) {
      state.stage++;
    },
    isNotCrtAnswer(state, _) {
      state.life--;
    },
    cleanAllCorpus(state, _) {
      state.datasets = gameSlice.getInitialState().datasets;
      state.results = gameSlice.getInitialState().results;
      state.studyId = gameSlice.getInitialState().studyId;
      state.stage = gameSlice.getInitialState().stage;
      state.correctAnswerCount = gameSlice.getInitialState().correctAnswerCount;
    },
    setStudyResult(state, action) {
      const { score, avrSpeed, crtAnsCnt } = state.results;
      const { elapsedT, pointEarned, isCrtAns } = action.payload;
      if (!isCrtAns) return;
      const _avrSpeed = parseInt((avrSpeed * crtAnsCnt + elapsedT) / (crtAnsCnt + 1));
      state.results = { score: score + pointEarned, avrSpeed: _avrSpeed, crtAnsCnt: crtAnsCnt + 1 };
    },
    // 도중에 데이터가 날아갔을때는?
    // [Todo] studyResult.answerList.length에 따라서 progress bar랑 로그인 유도 페이지
  },
});
