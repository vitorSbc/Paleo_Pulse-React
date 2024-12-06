import { useEffect, useState } from "react";
import "./Icons.css"

export default function Icons(props) {

    const [post, setPosts] = useState([])
    const [postIndex, setpostIndex] = useState(0)
    const setpostFil = props.setpostFil;
    
    useEffect(()=>{
      fetch('/News.json').then((response) => response.json()).then((data) => {
                      const sortedPosts = [...post].sort(() => Math.random() - 0.8);
                      setPosts(sortedPosts)})
        .catch((error) => console.error('Erro ao carregar o JSON:', error))
    },[])
    
    
    if (post.length === 0) {
      return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
    }

    const handleClick = (event)=>{
      setpostFil(event)
    }

    return(
        <>
        {post.map((item,index)=>{
            return(<img className="Icons" 
                        src={item.icon} 
                        alt={item.categoria} 
                        onClick={()=> handleClick(item.id)} 
                    />)
        })}
        </>
    )
}