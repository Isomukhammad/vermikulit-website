import styles from './image-buttons.module.scss';

const ImageButtons = ({info, number, setNumber}) => {
    return(
        <div className = {styles.div}>
        {
            info.map((i) => (
                <div 
                    key = {i.id} 
                    className = {`${styles.button} ${
                    i.id == number ? styles.active : null}`}
                    onClick = {() => setNumber(i.id)}
                    ></div>
            )) 
        }
        </div>
    )
}

export default ImageButtons;