import News from "./sources/News";
import "./styles.css";

export default function SectionBig() {
  
  

  return (
    <>
        <div className="Container">
            <News news="newsFirst" title=""/>
            <News news="newsMiddle" title=""/>
            <News news="newsEnd" title="O Guepardo do Cretáceo"/>
        </div>
    </>
  );
}
