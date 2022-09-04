import Link from 'next/link';
import styles from './products.module.scss';

const Products = ({info, styleName}) => {
    console.log(info);
    return(
        <div className = {`${styles.div} 
            ${styleName == "main" ? styles.main : null}
            ${styleName == "product-list" ? styles.productList : null}
        `}>
        {
            info.map((product, index) => (
                <Link key = {index} href = {product.link}>{product.title}</Link>
            ))
        }
        </div>
    )
}

export default Products;