import styles from '../../../styles/sass/table.module.scss'

export default function TableSection(props) {
    return <table 
    {...props} 
    className={`${props.className} ${styles.wrapper}`} 
    border={props.border}>
    {props.children}
        </table>
}