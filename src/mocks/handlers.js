import { rest } from 'msw';

const ROUTE = '/click';
const level = ''; //[Temp] 1,2,3

// [Todo] 핸들러 추가하기
const handlers = [
  rest.get(`${ROUTE}/setence/${level}`, (req, res, ctx) => {}),
  rest.post(`${ROUTE}/result`, (req, res, ctx) => {}),
  //   rest.post(`${ROUTE}/result`, (req, res, ctx) => {}),
  //   rest.post(`${ROUTE}/result`, (req, res, ctx) => {}),
];

export { handlers };
