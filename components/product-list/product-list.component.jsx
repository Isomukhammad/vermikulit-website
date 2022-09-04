import styles from './product-list.module.scss';

const ProductList = ({info}) => {
    return(
        <div className={styles.div}>
        {info.map(product => (
                <div key = {product.id} className = {styles.list}>
                    <div className={styles.title}>
                        <img src={product.image} alt="Лого" />
                        <h4>{product.title}</h4>
                    </div>

                    <div className = {styles.description}>
                        {product.description}
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default ProductList;