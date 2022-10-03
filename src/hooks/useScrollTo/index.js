import React from 'react';
/**
 * Control scrollY when event scroll
 * @param {number} maxHeight page's max height
 */
function useScrollTo(maxHeight = 2142) {
  let scrollCount = 0;
  const pageHeight = window.innerHeight; //714
  const maxCount = parseInt(maxHeight / pageHeight) - 1;

  React.useEffect(() => {
    const root = document.getElementById('root');
    let timer;

    const wheelHandler = e => {
      e.preventDefault();
      if (!timer) {
        timer = setTimeout(() => {
          const { deltaY } = e;

          // [Error] 화면에 딱 안맞음 -> video가 1080으로 되어있음

          // [Todo] 스크롤 딱한번에 저 이벤트가 실행됨 -> 스로틀이 아니라 디바운스인가?
          // [Todo] 모바일 고려하기 + 버튼 고려하기

          console.log(scrollCount);
          if (deltaY > 0) {
            scrollCount < maxCount && scrollCount++;
            window.scrollTo({ top: pageHeight * scrollCount, behavior: 'smooth' });
          } else {
            scrollCount !== 0 && scrollCount--;
            window.scrollTo({ top: pageHeight * scrollCount, behavior: 'smooth' });
          }

          timer = null;
        }, 500);
      }
    };

    root.addEventListener('wheel', wheelHandler);
    return () => root.removeEventListener('wheel', wheelHandler);
  }, [scrollCount, maxCount, pageHeight]);
}

export default useScrollTo;
