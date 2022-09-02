import Image from 'next/image';
import styles from './navbar.module.scss';

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <Image src = '/assets/logo/logo.png' width='134px' height = '35px'/>
            <div className = {styles.categories}>
                <div>Слюда</div>
                <div>Слюдопасты</div>
                <div>Вермикулит</div>
                <div>Агровермикулит</div>
            </div>
        </div>
    )
}

export default Navbar;