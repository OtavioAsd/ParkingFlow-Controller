import  styles from '../../../styles/sass/input.module.scss'

export default function Input(props) {
    return <input 
    {...props}
    className={`${props.className} ${styles.wrapper}`}
    type={props.type}
    id={props.id}
    onChange={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    /> 
}