import React from 'react';
import './index.css';

/**
 * MainContainer 속 article [Todo] 직관적이지 않음
 * article {
 * height: 100vh;
 * display: flex;
 * flex-direction: column;
 * justify-content: center;
 * align-items: center;
 * }
 */

function MainContainer({ children }) {
  return <main>{children}</main>;
}

export default MainContainer;
