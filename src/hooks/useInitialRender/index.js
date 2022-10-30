// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { studySlice } from '../../store/slices/study';

// function useInitialRender() {
//   const dispatch = useDispatch();
//   const initialRender = React.useRef(true);
//   if (initialRender.current) {
//     return () => false;
//   } else {
//     return () => dispatch(studySlice.actions.cleanAllCorpus());
//   }

//   return initialRender;
// }

// export default useInitialRender;
