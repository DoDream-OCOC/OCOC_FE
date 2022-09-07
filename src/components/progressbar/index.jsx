import React from 'react';
import style from './index.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';

function ProgressBar() {
    return(
        <>
        <nav className={style.progress_navbar}>
            <button className={style.progress_icon}>
                <FaRegTimesCircle />
            </button>

            <progress
                className={style.progress} 
                value="5" 
                max="10"> 
            </progress>
        </nav>    
        </>
    );
}

export default ProgressBar;