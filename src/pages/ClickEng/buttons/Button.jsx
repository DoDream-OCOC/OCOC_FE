import { useSelector } from 'react-redux';
import { Text } from '../../../components/element';
import uuid from 'react-uuid';
import style from './index.module.css';

//map()으로 배열을 ButtonItem 컴포넌트로 가공
//ButtonItem에 text, id를 props로 전달
function Button({onClick, idx, array}){

    return(
        <>
        <span>
            {(array).map(() => (
            
            idx++,

            <button
                key={idx}
                className={style.button_keyword}
                onClick={() => { onClick(idx) }}>

                <div className={style.button_keyword_text}>
                    <Text size="S-Bold" content={array[idx]} />
                </div>

            </button>
        ))}
        </span>    
        </>   
    );
}

export default Button;