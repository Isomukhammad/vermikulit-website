import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NavbarDropdown from '../navbar-dropdown/navbar-dropdown.component';

import styles from './navbar.module.scss';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [category, setCategory] = useState('');

    return(
        <>
        <div className = {styles.container}>
            <div className={styles.navbar}>
                <Link href = '/'>
                    <Image 
                        src = '/assets/logo/logo.png' 
                        width='134px' 
                        height = '35px' 
                        style = {{cursor: 'pointer'}}
                    />
                </Link>
                <div className = {styles.categories}>
                    <Link href = '/slyuda'
                        onMouseOver={(e) => {setDropdown(true)}}
                    >Слюда</Link>
                    <Link href = '/slyudopasty'>Слюдопасты</Link>
                    <Link href = '/vermikulit'>Вермикулит</Link>
                    <Link href = '/agrovermikulit'>Агровермикулит</Link>
                </div>
                {
                    dropdown == true ? <NavbarDropdown category = {category}/> : null
                }
            </div>
        </div>
        </>
    )
}

export default Navbar;