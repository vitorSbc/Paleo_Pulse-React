import "./title.css";

export default function Title(props){
    const newsPosition = props.newsPosition
    
    return(
        <h1 className={`Title ${newsPosition}`}>
            {props.title}
        </h1>
    )
}