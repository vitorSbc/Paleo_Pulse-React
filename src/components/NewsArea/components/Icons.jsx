import { useEffect, useState } from "react";
import "./Icons.css"

export default function Icons(props) {

    const post= props.post
    const setpostFil = props.setpostFil;
    const [sortedPosts, setSortedPosts] = useState([]);
    
    useEffect(()=>{
        const mixPost = [...post].sort(() => Math.random() - 0.5);
        setSortedPosts(mixPost)
      
    },[5])
    
    
    if (post.length === 0) {
      return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
    }

    const handleClick = (event)=>{
      setpostFil(event)
    }


    return(
        <>
        {sortedPosts.map((item,index)=>{
            return(<img className="Icons" 
                        src={item.icon} 
                        alt={item.categoria} 
                        onClick={()=> handleClick(item.id)} 
                    />)
        })}
        </>
    )
}