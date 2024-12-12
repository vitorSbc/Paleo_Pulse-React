import { useEffect, useState } from "react";
import "./Icons.css"

export default function Icons(props) {

    const post= props.post
    const setpostFil = props.setpostFil;
    const [sortedPosts, setSortedPosts] = useState([]);
    const category = props.category
    const setCategory = props.setCategory ? props.setCategory : " "
    
    useEffect(()=>{
      const mixPost = [...post].sort(() => Math.random() - 0.5);
      setSortedPosts(mixPost)
      
    },[])
    
    
    if (post.length === 0) {
      return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
    }

    const handleClick = (eventid, eventcat)=>{
      if(eventcat === "paleontology" ||  eventcat === "archeology" || eventcat === "hisotry"){
        setCategory(eventcat)
        console.log(eventcat)
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