import { rest } from 'msw';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const ROUTE = 'study';

export const sendStudyTypeHandler = rest.post(`/${ROUTE}`, async (req, res, ctx) => {
  const { level, studyType } = await req.json();

  // [Todo] 작업 수행 추가하기
  console.log(level);
  console.log(studyType);

  return res(
    ctx.json({
      words: [
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
        ['has', 'determination', 'to', 'great', 'she', 'succeed'],
      ],
      length: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      setence: [
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
        'she succeed has to determination great',
      ],
    }),
  );
});

export const sendStudyResultHandler = rest.post(`/${ROUTE}/result`, (req, res, ctx) => {
  const { answerList, answer } = req.json();

  // [Todo] 작업 수행 추가하기
  console.dir(answerList);
  console.log(answer);
  return res();
});
