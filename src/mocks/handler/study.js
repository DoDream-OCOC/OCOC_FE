import { rest } from 'msw';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ROUTE = 'study';

export const sendStudyTypeHandler = rest.post(`${BASE_URL}/${ROUTE}`, async (req, res, ctx) => {
  const { level, studyType } = await req.json();

  // [Todo] 작업 수행 추가하기
  console.log(level);
  console.log(studyType);
  (!level || !studyType) && res(ctx.delay(1000), ctx.status(400));

  const wordsObj = [
    {
      words: 'It will be truly honored for us to work with you.',
      length: 11,
      english: ['It', 'will', 'be', 'truly', 'honored', 'for', 'us', 'to', 'work', 'with', 'you.'],
      korean: '우리들 또한 당신들과 함께 한다면 큰 영광일 것입니다.',
    },
  ];

  let _json = {
    wordsObj: wordsObj,
  };

  for (let i = 1; i < 10; i++) {
    _json = { ..._json, wordsObj: [..._json.wordsObj, ...wordsObj] };
  }

  console.dir(_json);

  return res(ctx.delay(1000), ctx.json(_json));
});

export const sendStudyResultHandler = rest.post(`${BASE_URL}/${ROUTE}/result`, (req, res, ctx) => {
  const { answerList, answer } = req.json();

  // [Todo] 작업 수행 추가하기
  console.dir(answerList);
  console.log(answer);
  return res(ctx.delay(1000));
});
