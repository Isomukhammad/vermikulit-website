import Data from '../api/agrovermikulit.json';

import Carousel from '../../components/carousel/carousel.component';

import styles from '../../styles/Agrovermikulit.module.scss';
import ProductList from '../../components/product-list/product-list.component';
import Products from '../../components/products/products.component';
import Image from 'next/image';
import TextImage from '../../components/text-image/text-image.component';
import Footer from '../../components/footer/footer.component';

const Agrovermikulit = () => {
    return(
        <>
        <div className = {styles.container}>
            <Carousel info = {Data.agrovermikulit[0].agrovermikulitCarousel} length = {11} heightValue = {'300px'}/>

            <div className={styles.products}>
                <div>
                    <Image 
                        src = '/assets/images/agrovermikulit/agrovermikulit-ad1.png'
                        width = '650px'
                        height = '190px'
                        alt = 'Agrovermikulit photo'
                        objectFit="cover"
                        placeholder="blurDataURL"
                        priority = "true"             
                        style = {{borderRadius: '2em'}}    
                    />
                    <ProductList info={Data.agrovermikulit[1].productsInfo}/>
                </div>

                <div className = {styles.list}>
                    <Products info = {Data.agrovermikulit[1].productsInfo} styleName = {'product-list'}/>
                </div>
            </div>

            <TextImage
                image = {'/assets/images/agrovermikulit/agrovermikulit-ad2.jpg'}
                heightValue = {'300'}
                description = {'Выращивайте рассаду на почве с вермикулитом!'}
            />

            <div className = {styles.categories}>
                <div>
                    <h2>ВЕРМИСИЛ – помощник садовода!</h2>
                    <h3>Слюдяная фабрика выпускает агровермикулит в готовой упаковке:</h3>

                    <ul>
                        <li>Агровермикулит ВЕРМИСИЛ в мешках по 5 л</li>
                        <li>Средство для хранения ВЕРМИСИЛ в мешках по 30 л</li>
                    </ul>

                    <h2>ВЕРМИСИЛ предназначен</h2>

                    <ul>
                        <li>для внесения в почву при выращивании рассады</li>
                        <li>для внесения в почву огорода и сада при выращивании овощей и ягод</li>
                        <li>для внесения в лунки при посадке деревьев и кустарников</li>
                        <li>для хранения овощей и фруктов</li>
                        <li>для гидропоники</li>
                        <li>для внесения в почву при посадке комнатных растений</li>
                    </ul>
                </div>
                <div>
                    <Image 
                        src = '/assets/images/agrovermikulit/agrovermikulit-ad3.png'
                        width = '270px'
                        height = '339px'
                        alt = 'Agrovermikulit photo'
                        objectFit="cover"
                        placeholder="blurDataURL"
                        priority = "true"             
                        style = {{borderRadius: '2em'}}    
                    />
                </div>
            </div>

            <TextImage
                image = '/assets/images/agrovermikulit/agrovermikulit-ad4.png'
                heightValue = {'300'}
                description = {'Вермикулита много не бывает!'}
            />

            <div className = {styles.categories}>
                <div className = {styles.description}>
                    <h2>ВЕРМИСИЛ – лучший друг ваших растений!</h2>

                    <p>Вспученный вермикулит – легкий, сыпучий, зернистый, пористый материал, полученный в результате вспучивания чешуек гидратированной слюды вермикулита.</p>

                    <p>Вермикулит – это природный минерал, в состав которого входят такие микроэлементы как натрий, калий, магний, кальций и железо. Строение и минеральный состав вспученного вермикулита определяют его уникальные свойства, благодаря которым вспученный вермикулит находит широкое применение в сельском хозяйстве.</p>

                    <p><b>Свойства ВЕРМИСИЛа:</b></p>

                    <ul>
                        <li>минеральный химический состав</li>
                        <li>высокая влагоёмкость</li>
                        <li>уникальные ионообменные свойства</li>
                        <li>химическая инертность</li>
                        <li>безвредность</li>
                    </ul>
                </div>
                <div>
                    <Image 
                        src = '/assets/images/agrovermikulit/agrovermikulit-ad5.jpg'
                        width = '363px'
                        height = '320px'
                        alt = 'Agrovermikulit photo'
                        objectFit="contain"
                        placeholder="blurDataURL"
                        priority = "true"
                    />
                </div>
            </div>

            <TextImage
                image = {'/assets/images/agrovermikulit/agrovermikulit-ad6.jpg'}
                heightValue = {'300'}
                description = {'Добавляйте вермикулит в лунки при посадке деревьев и кустарников!'}
            />

        </div>

        <Footer/>
        </>
    )
}

export default Agrovermikulit;