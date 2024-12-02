import styles from '../../styles/sass/button.module.scss'

export default function Button(props) {
    return <button  
    {...props} 
    className={`${props.className} ${styles.wrapper}`} 
    type={props.type} 
    onClick={props.onClick}>{props.text} 
    </button>
}