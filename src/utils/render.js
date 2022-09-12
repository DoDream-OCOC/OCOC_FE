/**
 * Do function From second Rendering
 * @param {React.MutableRefObject<boolean>} initialRender
 * @param {function} func
 * @returns
 */
export const fromSecondRedering = (initialRender, func) => {
  if (initialRender.current) {
    initialRender.current = false;
  } else {
    return func();
  }
};
