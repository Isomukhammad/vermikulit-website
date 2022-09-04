import Image from 'next/image';

import styles from './text-image.module.scss';

const TextImage = ({image, description, heightValue}) => {
    return(
        <div className = {styles.div}>
                <Image
                    src = {image}
                    width = '1000px'
                    height= {`${heightValue}`}
                    alt = 'Information photo'
                    placeholder="blurDataURL"
                    style = {{borderRadius: '1em'}}
                />

                <div className= {styles.text}>
                    <h3>
                        {description}
                    </h3>
                </div>
            </div>
    )
}

export default TextImage;