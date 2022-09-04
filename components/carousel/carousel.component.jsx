import Image from "next/image";
import { useEffect, useState } from "react";
import ImageButtons from "../image-buttons/image-buttons.component";

import styles from './carousel.module.scss';

const Carousel = ({info, length}) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(number != length){
                setNumber(number + 1);
            } else {
                setNumber(0)
            }
        }, 10000)

        return () => clearInterval(interval);
    })

    const getButton = () => {
        if(info[number].button !== ''){
            return <button className= {styles.button}>{info[number].link}</button>
        } else {
            return null
        }
    }

    return(
        <div className={styles.div}>
            <div className = {styles.imagesWrap}>
                <div className = {styles.images}>                
                {
                    info.map(img => (
                        <div className = {`${number != img.id ? `${styles.img}` : null} ${styles.opacity}`}
                        key = {img.id}>
                        <img 
                            src = {img.image}
                            height = '400' 
                            width = '1000'
                            alt = 'Carousel photo'
                            objectFit="contain"
                            placeholder="blurDataURL"
                            priority = "true"
                            style = {{borderRadius: '1em'}}
                        />
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className = {styles.information}>
                <div className = {styles.title}>{info[number].title}</div>
                <div className = {styles.description}>{info[number].description}</div>
                <div className = {styles.link}>
                    {getButton()}
                </div>
            </div>
            <div className = {styles.buttons}>
                <ImageButtons info = {info} number = {number}   setNumber = {setNumber}/>
            </div>
        </div>
    )
}

export default Carousel;