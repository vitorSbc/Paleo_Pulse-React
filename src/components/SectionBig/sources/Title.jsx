import "./title.css";

export default function Title(props){
    const newsPosition = props.newsPosition
    const title = props.text;
    
    return(
        <h1 className={`Title ${newsPosition}`}>
            {title}
        </h1>
    )
}