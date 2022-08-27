import React from 'react';

import style from './index.module.css';

// [Todo] props 안 넣으면 에러발생시키게 하기 -> TS밖에 답이 없나
// enum 구현할까

/**
 * Text component
 * @param {L, M-Bold, M, M-Light, S} size text size
 * @param {String} text text's content
 * @returns Common text
 */
export const Text = ({ size, text }) => {
  return <div className={style[size]}>{text}</div>;
};

/**
 * Empty component
 * @param {rem} size Height size, must use 'rem'
 * @returns Empty
 */
export const Empty = ({ size }) => {
  return <div style={{ height: { size } }} />;
};
