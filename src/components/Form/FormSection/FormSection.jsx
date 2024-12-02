export default function FormSection(props) {
    return <form 
    {...props}
    className={`${props.className}`} 
    onSubmit={props.onSubmit}></form>
}