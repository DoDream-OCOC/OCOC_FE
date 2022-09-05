import { useState } from "react";
import { Text } from '../element';
import style from './index.module.css';
import { FaBars, FaBeer, FaTimes } from 'react-icons/fa';

function Hamburger() {

    const [isMobile, setIsMobile] = useState(false);

    return(
        <nav className={style.navbar}>
            <Text className={style.logo} size="M" content={'Logo here'} />
            <ul className={isMobile ? style.nav_links_mobile : style.nav_links}
            onClick={() => setIsMobile(false)}>
                <li className={style.premium}><Text size="S" content={'프리미엄 서비스'} /></li>
                <li className={style.tip}><Text size="S" content={'작문 팁'} /></li>
                <li className={style.debate}><Text size="S" content={'영작 팁'} /></li>
                <li className={style.sign_up}><Text size="S" content={'Sign up'} /></li>
            </ul>
            <button className={style.mobile_menu_icon}
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )}
            </button>    
        </nav>
    );
}

export default Hamburger;