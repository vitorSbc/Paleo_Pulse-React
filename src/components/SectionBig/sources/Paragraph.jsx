import "./paragraph.css"

export default function Paragraph(props){
    const text = props.text
    const focus = props.focus;

    const display = focus ? " " : "textOFF"

    return(
        <p className={`text ${display}`}> {text}</p>
    )
}