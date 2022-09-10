import { createSlice } from '@reduxjs/toolkit';

export const studySlice = createSlice({
  name: 'studySlice',

  //   [Todo] 데이터 형태 정해지면 ㄱ
  initialState: { res: '' },
  reducers: {
    set(state, action) {
      state.res = action.payload;
    },
    clean(state, action) {
      state.res = '';
    },
  },
});
