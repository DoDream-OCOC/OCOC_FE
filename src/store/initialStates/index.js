export const gameInitialState = {
  datasets: [
    {
      id: 0,
      questionType: '',
      clause: 0,
      english: '',
      korean: '',
      words: [],
      blankIndex: 0,
    },
  ],
  results: { score: 0, avrSpeed: 0, crtAnsCnt: 0 },
  studyId: 0,
  stage: 0,
  correctAnswerCount: 0,
  life: 0,
};

export const signInitialState = {
  X_AUTH_ACCESS_TOKEN: '',
  X_AUTH_REFRESH_TOKEN: '',
};
