import Image from 'next/image';

import Data from '../api/vermikulit.json';

import Carousel from '../../components/carousel/carousel.component';
import ProductList from '../../components/product-list/product-list.component';
import Products from '../../components/products/products.component';
import TextImage from '../../components/text-image/text-image.component';
import Footer from '../../components/footer/footer.component';

import styles from '../../styles/Vermikulit.module.scss';

const Vermikulit = () => {
    return(
        <>
        <div className = {styles.div}>
            <Carousel info = {Data.vermikulit[0].vermikulitCarousel} length = {7} heightValue = '300px'/>


            <div className={styles.products}>
                <div>
                    <h2>Санкт-Петербургская Слюдяная фабрика – ведущий производитель вспученного вермикулита в России!</h2>
                    <ProductList info={Data.vermikulit[1].productsInfo}/>
                </div>

                <div className = {styles.list}>
                    <Products info = {Data.vermikulit[1].productsInfo} styleName = {'product-list'}/>
                </div>
            </div>

            <Image
                src = '/assets/images/vermikulit/vermikulit-ad1.jpg'
                width = '1003px'
                height = '723px'
                alt = 'Vermikulit photo'
                objectFit="contain"
                placeholder="blurDataURL"
                priority = "true"             
                style = {{borderRadius: '2em'}}    
            />

            <h2>Что такое вспученный вермикулит?</h2>

            <p>В природе вермикулит представлен чешуйчатыми частицами гидратированной слюды. Месторождения вермикулита известны в Африке, Бразилии, Китае, Северной Америке. В России месторождения вермикулита расположены на Кольском полуострове, на Урале, в Сибири, в Приморском крае. Вермикулит имеет различный размер и в разных месторождениях колеблется от 0,1 до 10 мм.</p>

            <h3>Химическая формула вермикулита</h3>

            <p>При обогащении вермикулит фракционируют по размеру частиц. Вермикулитовый концентрат является сырьем для получения конечного продукта, которым является вспученный вермикулит.</p>

            <p>При обжиге в вермикулитовых печах кристаллизованная между слоями слюды вода испаряется, происходит расслоение чешуек слюды или вспучивание.</p>

            <p>Вспученный вермикулит представляет собой сыпучий зернистый материал чешуйчатого строения.</p>

            <div className= {styles.photos}>
                <img 
                    src = '/assets/images/vermikulit/vermikulit-ad2.jpg' 
                    alt="Vermikulit photo" 
                    width = '500px'
                />
                <img 
                    src = '/assets/images/vermikulit/vermikulit-ad3.jpg' 
                    alt="Vermikulit photo" 
                    width = '500px'
                />
                <img 
                    src = '/assets/images/vermikulit/vermikulit-ad4.jpg' 
                    alt="Vermikulit photo" 
                    width = '500px'
                />
                <img 
                    src = '/assets/images/vermikulit/vermikulit-ad5.jpg' 
                    alt="Vermikulit photo" 
                    width = '500px'
                />
            </div>

            <h3>Уникальные свойства вспученного вермикулита</h3>

            <p>Вспученный вермикулит обладает всеми свойствами натуральной слюды:</p>

            <ul>
                <li>низкая теплопроводность</li>
                <li>огнеупорность</li>
                <li>химическая инертность</li>
                <li>низкая электропроводимость</li>
                <li>безвредность</li>
            </ul>

            <p>После вспучивания вермикулит приобретает дополнительные свойства:</p>

            <ul>
                <li>низкий объемный вес</li>
                <li>высокое звукопоглощение</li>
                <li>высокая влагоемкость</li>
                <li>высокая адсорбционная способность ряда органических веществ</li>
                <li>уникальные ионообменные свойства</li>
            </ul>

            <TextImage
                image = {'/assets/images/vermikulit/vermikulit-ad6.jpg'}
                heightValue = {'300'}
                description = {'Санкт-Петербургская Слюдяная фабрика – крупнейший производитель вспученного вермикулита в России!'}
            />

            <h3>Производство вермикулита</h3>

            <p>Слюдяная фабрика выпускает вспученный вермикулит с 70-х годов XX века. На предприятии стоят самые мощные печи по вспучиванию вермикулита в России. Высокопроизводительное оборудование и логистический комплекс определяет минимальную стоимость продукта на рынке.</p>

            <p>В связи с тем, что в 2000-х годах были закрыты карьеры Кольского полуострова, концентрат вермикулита сейчас приходится везти из-за рубежа, поэтому цена на вспученный вермикулит колеблется в зависимости от курса валют. Тем не менее Слюдяная фабрика предлагает минимальные цены от производителя, считая вспученный вермикулит важным производственным направлением предприятия и востребованным продуктом на отечественном рынке.</p>

            <p>В 2020 году возрождена добыча вермикулита в Ковдоре. Слюдяная фабрика опять получает вермикулит с российского месторождения, расположенного близко к Санкт-Петербургу и исторически обеспечивающего фабрику вермикулитом и флогопитом.</p>

            <p>Продажа вспученного вермикулита осуществляется в различной фасовке: биг-бэги, полипропиленовые или бумажные мешки по 70 л и красочные бумажные мешки для розничной торговли по 30 л и 5 л.</p>
        </div>
        <Footer/>
        </>
    )
}

export default Vermikulit;