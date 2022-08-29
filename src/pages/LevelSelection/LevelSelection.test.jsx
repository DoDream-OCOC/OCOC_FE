import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';

import LevelSelection from '.';

import Test from '../../utils/test';

afterEach(cleanup);

const RenderPage = () =>
  render(
    <Router>
      <LevelSelection />
    </Router>,
  );

describe('LevelSelection page', () => {
  it('Render LevelSelection page', () => {
    const test = new Test(RenderPage());

    screen.getByTitle('header-logo');
    test.text('Logo here');
    screen.getByTitle('header-hamburger');

    test.text('학습 레벨을 선택해주세요.');
    test.text('초급');
    test.text('3~5개 단어 클릭 영작');
    test.text('중급');
    test.text('6~10개 단어 클릭 영작');
    test.text('고급');
    test.text('11~15개 단어 클릭 영작');
  });
});
