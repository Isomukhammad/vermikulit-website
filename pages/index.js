import Head from 'next/head'
import Image from 'next/image';

import Data from './api/data.json';
import Vermikulit from './api/vermikulit.json';
import Agrovermikulit from './api/agrovermikulit.json';

import Carousel from '../components/carousel/carousel.component'
import Products from '../components/products/products.component';

import styles from '../styles/Home.module.scss'
import Footer from '../components/footer/footer.component';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Слудяная фабрика</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Carousel info = {Data.main[0].mainCarousel} length = {6} heightValue = '400px'/>
      </div>

      <h1 className = {styles.title}>Наша продукция</h1>

      <div className= {styles.products}>
        <div>
          <div className={styles.productImage}>
            <Image 
              src = '/assets/images/main/product-slyuda.png'
              height = '269px' 
              width = '201px'
              alt = 'Carousel photo'
              objectFit="contain"
              placeholder="blurDataURL"
              priority = "true"
            />
          </div>
          <h3>Слюда</h3>
          <Products info={Data.slyuda[0].categories}/>
        </div>

        <div>
          <div className={styles.productImage}>
            <Image 
              src = '/assets/images/main/product-vermikulit.png'
              height = '269px' 
              width = '201px'
              alt = 'Carousel photo'
              objectFit="contain"
              placeholder="blurDataURL"
              priority = "true"
            />
          </div>
          <h3>Вермикулит</h3>
          <Products info = {Vermikulit.vermikulit[1].productsInfo} styleName = {'product-list'}/>
        </div>

        <div>
          <div className={styles.productImage}>
            <Image 
              src = '/assets/images/main/product-agrovermikulit.jpg'
              height = '269px' 
              width = '201px'
              alt = 'Carousel photo'
              objectFit="contain"
              placeholder="blurDataURL"
              priority = "true"
            />
          </div>
          <h3>Агровермикулит</h3>
          <Products info = {Agrovermikulit.agrovermikulit[1].productsInfo} styleName = {'product-list'}/>
        </div>
      </div>

      <div className = {styles.description}>
        <Image
          src = '/assets/images/main/main-ad1.png'
          width = '900'
          // height = '611'
          height= '600'
          alt = 'Carousel photo'
          objectFit="cover"
          placeholder="blurDataURL"
          priority = "true"
          // style = {{borderRadius: '1em'}}
        />

        <p>
        Слюдяная фабрика живёт современной жизнью. На фабрике постоянно ведутся работы по восстановлению, реконструкции, модернизации и перепрофилированию цехов. Слюдяная фабрика стала домом не только для слюдяных производств. На территории Слюдяной фабрики трудятся предприятия строительной, атомной, металлообрабатывающей, химической и других отраслей производства. Заложенные еще в 60-е годы производственные мощности оказались сегодня особенно востребованы. Инфраструктура фабрики обеспечивает арендаторов и партнёров подъездными путями, складскими и производственными площадями, офисными помещениями.
        </p>
      </div>
      <Footer/>
    </div>
  )
}