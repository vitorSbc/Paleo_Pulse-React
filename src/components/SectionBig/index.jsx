import News from "./sources/News";
import "./styles.css";

export default function SectionBig() {
  
  

  return (
    <>
        <div className="Container">
            <News news="newsFirst" text="Um Novo Colosso"/>
            <News news="newsMiddle" text="O roubado"/>
            <News news="newsEnd" text="O Guepardo do Cretáceo"/>
        </div>
    </>
  );
}
