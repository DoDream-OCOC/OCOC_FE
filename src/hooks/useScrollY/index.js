import React from 'react';
/**
 * Control scrollY when event scroll
 * @param {number} maxHeight page's max height
 */
function useScrollY(maxHeight = 2400) {
  let scrollCount = 0;
  const pageHeight = window.innerHeight;
  const maxCount = parseInt(maxHeight / pageHeight);

  React.useEffect(() => {
    const root = document.getElementById('root');

    const wheelHandler = e => {
      e.preventDefault();
      let timer;
      setTimeout(() => {
        if (!timer) {
          const { deltaY } = e;

          // [Error] 화면에 딱 안맞음
          // [Todo] 상황에 맞게 scroll 제어 필요
          // [Todo] 스크롤 딱한번에 저 이벤트가 실행됨 -> 스로틀이 아니라 디바운스인가?
          // [Todo] 모바일 고려하기 + 버튼 고려하기

          if (deltaY > 0) {
            scrollCount < maxCount && scrollCount++;
            window.scrollTo({ top: pageHeight * scrollCount, behavior: 'smooth' });
          } else {
            scrollCount !== 0 && scrollCount--;
            window.scrollTo({ top: pageHeight * scrollCount, behavior: 'smooth' });
          }

          timer = null;
        }
      }, 500);
    };

    root.addEventListener('wheel', wheelHandler);
    return () => root.removeEventListener('wheel', wheelHandler);
  }, []);
}

export default useScrollY;
