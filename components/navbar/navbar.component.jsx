import Image from 'next/image';
import { useState } from 'react';

import NavbarDropdown from '../navbar-dropdown/navbar-dropdown.component';

import styles from './navbar.module.scss';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [category, setCategory] = useState('');

    return(
        <div className={styles.navbar}>
            <Image src = '/assets/logo/logo.png' width='134px' height = '35px'/>
            <div className = {styles.categories}>
                <div 
                    onMouseOver={(e) => {setDropdown(true)}}
                >Слюда</div>
                <div>Слюдопасты</div>
                <div>Вермикулит</div>
                <div>Агровермикулит</div>
            </div>
            {
                dropdown == true ? <NavbarDropdown category = {category}/> : null
            }
        </div>
    )
}

export default Navbar;