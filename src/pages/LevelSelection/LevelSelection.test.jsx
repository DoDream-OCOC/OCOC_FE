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
  });
});
