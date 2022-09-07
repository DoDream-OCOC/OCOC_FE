import style from './index.module.css';
import { Text } from '../../../components/element';

//버튼 컴포넌트
function ButtonItem({ keyword, onClick })
    {

    const {id, text} = keyword;
        
    return(
        <>
            <button
            className={style.button_keyword}
            onClick={() => { onClick(id) }}>
                <div className={style.button_keyword_text}>
                    <Text size="S-Bold" content={text} />
                </div>
            </button>
        </>
    );
}

export default ButtonItem;