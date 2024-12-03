import { useEffect, useState } from "react";
import News from "./sources/News";
import "./styles.css";

export default function SectionBig() {
  const [newsFocus, setNewsFocus] = useState(false);
  const [post, setPosts] = useState([])

  useEffect(()=>{
    fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data).catch((error) => console.error("Erro ao carregar o JSON: ", error)))
  },[])
  
  return (
    <>
        <div className="Container">
            <News key={post.id} news="newsFirst" title={post[0].titulo} text={post[0].texto}/>
        </div>
    </>
  );
}
