import "./title.css";

export default function Title(props){
    const title = props.title;
    const focus = props.focus;
    const titleFocus = focus ? "titleFocus" : " "
    
    return(
        <h1 className={`Title ${titleFocus}`}>
            {title}
        </h1>
    )
}