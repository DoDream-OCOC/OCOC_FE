import React from 'react';
/**
 * useGradedUI hook
 * @returns isCorrectBtn, isGrading, showGradedUI
 */
function useGradedUI() {
  // [Todo] 네이밍이 별로임
  const [isCorrectBtn, setIsCorrectBtn] = React.useState(null);
  const [isGrading, setIsGrading] = React.useState(false);

  /**
   * show graded UI
   * @param {boolean} _isCorrectAnswer
   * @param {Function} callback Function to call after timer ends
   */
  const showGradedUI = (_isCorrectAnswer, callback) => {
    setIsGrading(true);
    setIsCorrectBtn(_isCorrectAnswer);
    setTimeout(() => {
      callback();
      setIsCorrectBtn(null);
      setIsGrading(false);
    }, 1500);
  };

  // [Todo] 객체 리턴으로 바꾸기 {isCrtAns, isGrading, showGradedUI }
  return [isCorrectBtn, isGrading, showGradedUI];
}

export default useGradedUI;
