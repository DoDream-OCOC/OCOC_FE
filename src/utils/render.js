/**
 * Do function From second Rendering
 * @param {React.MutableRefObject<boolean>} initialRender
 * @param {function} func
 * @returns
 */
// 에러 나서 사용 x
export const fromSecondRedering = (initialRender, func) => {
  if (initialRender.current) {
    initialRender.current = false;
  } else {
    return func();
  }
};
