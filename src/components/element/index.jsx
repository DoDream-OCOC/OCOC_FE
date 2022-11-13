import React from 'react';

import { ReactComponent as Loading } from '../../assets/loading/ellipsis.svg';

import style from './index.module.css';

/**
 * Text component
 * @param {'H1'| 'H2' | 'H3' | 'H4' | 'H5' | 'B1' | 'B2' | 'B3'} size text size
 * @prop {'Text-1' | 'Text-2' | Red} color text's color
 * @prop {string} content text's content
 * @returns Common text
 */
export const Text = ({ size = 'B1', color = 'Text-2', content, ...props }) => {
  return (
    <span className={style[size]} style={{ color: `var(--${color})` }} {...props}>
      {content}
    </span>
  );
};

/**
 * Empty component
 * @prop {rem} size Height size, must use 'rem'
 * @returns Empty
 */
export const Empty = ({ size }) => {
  return <div style={{ height: size }} />;
};

/**
 * Button component
 * @prop {boolean} isDisabled
 * @prop {boolean} isLoading
 * @prop {string} content button's content
 * @returns Button
 */
export const Button = ({ isDisabled = false, isLoading = false, content, ...props }) => {
  const disabled = isDisabled || isLoading;
  return (
    <button className={style.button} style={{ opacity: disabled ? '0.5' : '1' }} disabled={disabled} {...props}>
      {!isLoading && content}
      {isLoading && <Loading />}
    </button>
  );
};

/**
 * Graiding button component
 * @prop {boolean} isDisabled
 * @prop {boolean} isGrading
 * @prop {string} content button's content
 * @returns Button
 */
export const GradingButton = ({ isDisabled = false, isGrading = false, content, ...props }) => {
  const disabled = isDisabled || isGrading;
  return (
    <button className={style.button} style={{ opacity: disabled ? '0.5' : '1' }} disabled={disabled} {...props}>
      {!isGrading ? content : '채점중입니다'}
      {isGrading && <Loading />}
    </button>
  );
};

/**
 * Input component
 * @prop {string} placeholder
 * @prop {{isError:boolean; errMsg:string}} vldErr
 * @returns Input
 */
export const Input = React.forwardRef(({ placeholder, vldErr, ...props }, ref) => {
  const { isError, errMsg } = vldErr;
  return (
    <div className={style.flexCol}>
      <input ref={ref} placeholder={placeholder} className={`${style.button} ${style.input} ${isError && style.inputError}`} {...props} />
      {/* Text 사용하지 말고 짜야될 듯 */}
      {isError && <span className={`${style.inputErrMsg} ${style.B3}`}>{errMsg}</span>}
    </div>
  );
});

/**
 * BlankInput component
 **/
export const BlankInput = () => {
  return <input type="text" className={style.blank_container}></input>;
};
