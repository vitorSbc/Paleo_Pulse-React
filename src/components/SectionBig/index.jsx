import { useEffect, useState } from "react";
import News from "./sources/News";
import "./styles.css";

export default function SectionBig(props) {
  const [post, setPosts] = useState([])
  const postFocus = props.postFil

  useEffect(()=>{
    fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error('Erro ao carregar o JSON:', error))
  },[])
  
  if (post.length === 0) {
    return <div>Carregando...</div>;  // Mostrar algo enquanto os dados estão sendo carregados
  }

  return (
    <>
        <div className="Container">
        <News 
          key={post[postFocus -1].id} 
          news="newsFirst" 
          title={post[postFocus -1].titulo} 
          text={post[postFocus -1].texto} 
          img={post[postFocus -1].img} 
          cate={post[postFocus -1].categorias}/>

        </div>
    </>
  );
}
