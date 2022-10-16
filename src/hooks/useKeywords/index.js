import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

function useKeywords(){

    const { korean, clause, english, words, id } = useSelector(state => state.study.datasets[state.study.stage - 1]);
    const { stage, studyId, results } = useSelector(state => state.study);

    const [keywords, setKeywords] = React.useState([]); //words 배열
    const [newKeywords, setNewKeywords] = React.useState([]); //answerList에 넣을 배열

    // Create keywords's random id
    const createKeywordsId = () => {
        let _keywords = [];
        for (let i = 0; i < clause; i++) {
          let id = shortid.generate();
          let text = words[i];
          _keywords.push({ id, text });
        }
        return _keywords;
      };
    
    return {keywords, newKeywords, setKeywords, setNewKeywords, createKeywordsId};
}

export default useKeywords;