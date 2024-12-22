export default function IconsCategory(props){
    const posts = props.post;
    const category = props.category
    const setCategory = props.setCategory

    const handleClick = (eventid, eventcat)=>{
        setCategory(eventcat)      
    }
    
    return(
        <>
        {posts.map((item,index)=>{
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