import React from 'react';
/**
 * useGradedUI hook
 * @returns [isCorrectBtn, isGrading, showGradedUI]
 */
function useGradedUI() {
  const [isCorrectBtn, setIsCorrectBtn] = React.useState(null);
  const [isGrading, setIsGrading] = React.useState(false);

  /**
   * show graded UI
   * @param {boolean} isCorrectAnswer
   * @param {Function} callback Function to call after timer ends
   */
  const showGradedUI = (isCorrectAnswer, callback) => {
    setIsGrading(prev => true);
    setIsCorrectBtn(isCorrectAnswer);
    setTimeout(() => {
      callback();
      setIsGrading(prev => false);
    }, 1500);
  };

  return [isCorrectBtn, isGrading, showGradedUI];
}

export default useGradedUI;
