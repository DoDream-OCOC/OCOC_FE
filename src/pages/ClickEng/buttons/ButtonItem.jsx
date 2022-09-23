import { Text } from '../../../components/element';
import style from './index.module.css';

function ButtonItem({ keyword, onClick })
    {

    const { id, text } = keyword;

    return(
        <>
            <button
            className={style.button_keyword}
            onClick={() => { onClick(id) }}>
                <div className={style.button_keyword_text}>
                    <Text size="S" content={text} />
                </div>
            </button>
        </>
    );

}

export default ButtonItem;