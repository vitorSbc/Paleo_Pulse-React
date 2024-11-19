import "./news.css"

export default function News(props){
    const  news  = props.news;
    const backgroundImg = news 
    
    
    return(
       <>
        <div className={`Teste ${backgroundImg}`}></div>
       </>
)
}