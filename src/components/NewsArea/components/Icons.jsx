import { useEffect, useState } from "react";
import "./Icons.css"

export default function Icons(props) {
  
  const post= props.post
  const setpostFil = props.setpostFil;
  const [sortedPosts, setSortedPosts] = useState([]);
  const [filtredPosts, setFiltredPosts] = useState([]);
  const category = props.category
  const setCategory = props.setCategory ? props.setCategory : " "
  
  const mixPostFiltred = (item)=>{
    if(item.categoria === category){
      return item
    }
  }
  useEffect(()=>{
    const mixPost = [...post].sort(() => Math.random() - 0.5);
    if(category){
      const filPosts = mixPost.filter(mixPostFiltred)
      setSortedPosts(filPosts)
    }
    else{
      setSortedPosts(mixPost)
    }
    },[])
    
    
    if (post.length === 0) {
      return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
    }

    const handleClick = (eventid, eventcat)=>{
      if(eventid === "paleontology" ||  eventid === "archeology" || eventid === "history"){
        setCategory(eventcat)
      }
      else{
        setpostFil(eventid)

      }
    }

    
    return(
        <>
        {sortedPosts.map((item,index)=>{
            return(<img className="Icons" 
                        key={item.id}
                        src={item.icon} 
                        alt={item.categoria} 
                        onClick={()=> handleClick(item.id, item.categoria)} 
                    />)
        })}
        </>
    )
}