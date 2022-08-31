import { rest } from 'msw';

// [Todo] 정확하게 정해지고 다시
const ROUTE = '/click';
const level = 1; //[Temp] 1,2,3 int

export const getClickSentence = rest.get(`${ROUTE}/setence/${level}`, async (req, res, ctx) => {
  return res(
    ctx.json({
      worldList: ['has', 'determination', 'to', 'great', 'she', 'succeed'],
      length: 6,
      setence: ['she succeed has to determination great'],
    }),
  );
});

const resultSentence = null; //[Temp] 사용자가 제출한 답
const correct = true;

export const postClickResult = rest.post(`${ROUTE}/result`, (req, res, ctx) => {
  // eslint-disable-next-line no-unused-vars
  const { userNo, answerList, answer } = req.json();

  return res(
    ctx.json({
      resultSentence: resultSentence,
      correct: correct,
    }),
  );
});
