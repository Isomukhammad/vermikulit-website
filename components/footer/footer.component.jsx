import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss'

const Footer = () => {
    return(
        <div className={styles.div}>
            <div className={styles.links}>
                <Link href = '/slyuda/'>Слюда</Link>
                <Link href = '/slyuda/'>Слюдопласты</Link>
                <Link href = '/slyuda/'>Вермикулит</Link>
                <Link href = '/slyuda/'>Агровермикулит</Link>
            </div>

            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src = '/assets/images/footer/logo-footer.png'
                        width = '134px'
                        height = '35px'
                        alt = 'Company logo'
                        objectFit="contain"
                        placeholder="blurDataURL"
                        priority = "true"
                    />
                </div>
                <p>Санкт-Петербургская Слюдяная фабрика — производитель электроизоляционных материалов и изделий на основе слюды</p>
            </div>

            <div className={styles.developer}>
                Website is created by <span><Link href = 'https://github.com/Isomukhammad'>ISkO</Link></span>
            </div>
        </div>
    )
}

export default Footer;