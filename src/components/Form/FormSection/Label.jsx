import  styles from '../../../styles/sass/label.module.scss'

export default function Label(props) {
    return <label {...props} 
    className={`${props.className} ${styles.wrapper }`} 
    htmlFor={props.htmlFor}>{props.text}</label>
}