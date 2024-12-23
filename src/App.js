import Header from "./components/Header";
import "./App.css";
import SectionBig from "./components/SectionBig";
import NewsArea from "./components/NewsArea";
import { useEffect, useState } from "react";
import Category from "./components/Category";

export default function App() {
  const [postFil, setpostFil] = useState([])
  const [post, setPosts] = useState([])
  const [category, setCategory] = useState(null)
  
  useEffect(()=>{
    fetch('/News.json').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error('Erro ao carregar o JSON:', error))
  },[])

if(post.length === 0){
  return <h2>Loading...</h2>
}
else{
  return (
    <>
      <Header />
      <Category post={post} category = {category} setCategory={setCategory}/>
      <NewsArea post={post} setpostFil={setpostFil} category = {category}/>
      <SectionBig post={post} postFil={postFil} />
    </>
  );
}
}

