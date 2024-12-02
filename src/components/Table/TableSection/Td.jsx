export default function TableData(props) {
    return <td className={props.className}>{props.text}{props.children}</td>;
  }