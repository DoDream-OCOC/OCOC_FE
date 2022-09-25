import { rest } from 'msw';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ROUTE = 'study';

export const sendStudyTypeHandler = rest.post(`${BASE_URL}/${ROUTE}`, async (req, res, ctx) => {
  const { level, studyType } = await req.json();

  (!level || !studyType) && res(ctx.delay(1000), ctx.status(400));

  const datasets = [
    {
      clause: 11,
      createdAt: '생성날짜',
      english: 'It will be truly honored for us to work with you.',
      id: 123123,
      korean: '우리들 또한 당신들과 함께 한다면 큰 영광일 것입니다.',
      words: ['It', 'will', 'be', 'truly', 'honored', 'for', 'us', 'to', 'work', 'with', 'you.'],
    },
  ];

  const datasets2 = [
    {
      clause: 11,
      createdAt: '생성날짜',
      english: 'It will be truly honored for us to work with you.2',
      id: 123122,
      korean: '우리들 또한 당신들과 함께 한다면 큰 영광일 것입니다.2',
      words: ['It', 'will', 'be', 'truly', 'honored', 'for', 'us', 'to', 'work', 'with', 'you.2'],
    },
  ];

  let _json = {
    datasets: datasets,
  };

  for (let i = 1; i < 10; i++) {
    if (i === 2) _json = { ..._json, datasets: [..._json.datasets, ...datasets2] };
    else _json = { ..._json, datasets: [..._json.datasets, ...datasets] };
  }
  return res(ctx.delay(1000), ctx.json(_json));
});

export const sendStudyResultHandler = rest.post(`${BASE_URL}/${ROUTE}/result`, (req, res, ctx) => {
  const { answerList, answer } = req.json();

  // [Todo] 작업 수행 추가하기
  console.dir(answerList);
  console.log(answer);
  return res(ctx.delay(1000));
});
