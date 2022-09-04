import Data from '../api/slyudopasty.json';

import ProductList from '../../components/product-list/product-list.component';

import styles from '../../styles/Slyudopasty.module.scss';
import Products from '../../components/products/products.component';
import Image from 'next/image';
import Footer from '../../components/footer/footer.component';

const Slyudopasty = () => {
    return(
        <>
        <div className={styles.div}>
            <div className={styles.products}>
                <ProductList info={Data.slyudoplasty[0].productsInfo}/>

                <div className = {styles.list}>
                    <Products 
                        info = {Data.slyudoplasty[0].productsInfo} 
                        styleName = {'product-list'}
                    />
                </div>
            </div>

            <div>
                <Image
                    src = '/assets/images/slyudoplasty/slyudoplasty-ad1.png'
                    width = "900"
                    height = '639'
                    alt = 'Slyudoplasty photo'
                    objectFit="contain"
                    placeholder="blurDataURL"
                    style = {{borderRadius: '1em'}}
                />
            </div>

            <div className={styles.description}>
                <h2>Слюдяные электроизоляционные материалы незаменимы в электротехнике!</h2>

                <p>Слюда – природный минерал с уникальными электроизоляционными свойствами, это природный диэлектрик, обладающий высокой электрической, химической, термической и механической прочностью. Слюду и изделия из слюды применяют в качестве электрической изоляции.</p>

                <p>Электроизоляционные материалы изготавливают из мелких чешуек слюды флогопит или мусковит. Основа этих материалов – слюдяная бумага, полученная гидромеханическим способом, при котором частицы слюды слипаются друг с другом при наложении в водной среде и последующем нагревании. Слюдяная бумага без связующих, или непропитанная, сама по себе является продуктом Слюдяной фабрики. Для производства слюдолент слюдяную бумагу пропитывают композиционными лаками, укрепляют стеклотканью и нарезают. Слюдопласты получают прессованием нескольких слоев бумаги.</p>

                <h2>Электротехническая слюда от Слюдяной фабрики</h2>

                <p>Санкт-Петербургская Слюдяная фабрика – старейшее предприятие по производству материалов из слюды. Производственные цеха по изготовлению слюдяных бумаг, лент и слюдопластов, а также отработанные десятилетиями технологии и накопленный опыт создают основу для успешной деятельности предприятия в условиях современной экономики. Уникальная продукция фабрики востребована на отечественном электротехническом рынке.  </p>
            </div>

            <div>
                <Image 
                    src = '/assets/images/slyudoplasty/slyudoplasty-ad2.png'
                    width = "1000"
                    height = '600'
                    alt = 'Slyudoplasty photo'
                    objectFit="cover"
                    placeholder="blurDataURL"
                    style = {{borderRadius: '1em'}}
                />
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Slyudopasty;