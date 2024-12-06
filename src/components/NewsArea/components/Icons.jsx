import { useEffect, useState } from "react";
import "./Icons.css"

export default function Icons(props) {

    const [post, setPosts] = useState([])
    const setpostFil = props.setpostFil;

    useEffect(()=>{
      fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error('Erro ao carregar o JSON:', error))
    },[])
    
    if (post.length === 0) {
      return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
    }

    const handleClick = (event)=>{
      setpostFil(post[event])
    }

    return(
        <>
        {post.sort(() => Math.random() - 0.8).map((item,index)=>{
            return(<img className="Icons" src={item.icon} alt={item.categoria} onClick={handleClick(index)}/>)
        })}
        </>
    )
}