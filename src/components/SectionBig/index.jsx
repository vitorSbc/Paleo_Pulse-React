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
          key={post[0].id} 
          news={post[0].img2}
          title={post[0].titulo} 
          text={post[0].texto} 
          img={post[0].img}
          cate={post[0].categorias}/>

        </div>
    </>
  );
}
